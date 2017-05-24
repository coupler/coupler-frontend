import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Job } from './job';
import { LinkageResultService } from './linkage-result.service';
import { environment } from '../environments/environment';

@Injectable()
export class JobService {
  private jobsUrl = environment.apiUrl + '/jobs';
  private headers = new Headers({'Content-Type': 'application/json'});
  private attributeMap = {
    id: "id",
    kind: "kind",
    status: "status",
    error: "error",
    linkage_id: "linkageId",
    linkage_result_id: "linkageResultId",
    started_at: "startedAt",
    ended_at: "endedAt",
    linkage_result: "linkageResult"
  };

  constructor(
    private http: Http,
    private linkageResultService: LinkageResultService
  ) { }

  getJobs(): Promise<Job[]> {
    return this.http.
      get(this.jobsUrl).
      toPromise().
      then(response => {
        let data = response.json();
        return data.map(attribs => this.build(attribs));
      }).
      catch(this.handleError);
  }

  getJob(id: number): Promise<Job> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.
      get(url).
      toPromise().
      then(response => this.build(response.json())).
      catch(this.handleError);
  }

  create(job: Job): Promise<Job> {
    if (job.id) {
      throw new Error('Job must not already have `id` when creating.');
    }
    const url = this.jobsUrl;
    let data = JSON.stringify(this.unbuild(job));
    return this.http.
      post(url, data, {headers: this.headers}).
      toPromise().
      then(response => {
        let id = response.json().id;
        job.id = id;
        return job;
      }).
      catch(this.handleError);
  }

  run(id: number): Promise<any> {
    if (!id) {
      throw new Error('Job must have an `id` when running.');
    }
    const url = `${this.jobsUrl}/${id}/run`;
    return this.http.
      post(url, null, {headers: this.headers}).
      toPromise().
      catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
  }

  build(attribs: any): Job {
    let result = new Job();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.attributeMap) {
        let mappedKey = this.attributeMap[key];
        switch (mappedKey) {
          case 'startedAt':
          case 'endedAt':
            value = new Date(value);
            break;
          case 'linkageResult':
            value = this.linkageResultService.build(value);
            break;
        }
        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuild(job: Job): any {
    let result = {};
    for (let key in this.attributeMap) {
      let mappedKey = this.attributeMap[key];
      let value = job[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'startedAt':
        case 'endedAt':
        case 'status':
          continue;

        case 'linkageId':
          value = +value;
          break;
      }

      result[key] = value;
    }
    return result;
  }
}
