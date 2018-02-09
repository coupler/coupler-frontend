import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { Job } from './job';
import { LinkageResultService } from './linkage-result.service';
import { environment } from '../environments/environment';

@Injectable()
export class JobService extends AbstractService {
  private jobsUrl = environment.apiUrl + '/jobs';
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
    private http: HttpClient,
    private linkageResultService: LinkageResultService
  ) {
    super();
  }

  getJobs(): Observable<Job[] | ClientError> {
    return this.http.get<any[]>(this.jobsUrl).
      map(data => data.map(d => this.build(d))).
      catch(this.handleClientError);
  }

  getJob(id: number): Observable<Job | ClientError> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get(url).
      map(data => this.build(data)).
      catch(this.handleClientError);
  }

  create(job: Job): Observable<Job | ClientError | ValidationError> {
    if (job.id) {
      throw new Error('Job must not already have `id` when creating.');
    }
    const url = this.jobsUrl;
    return this.http.post<{id: number}>(url, this.unbuild(job)).
      map(data => {
        job.id = data.id;
        return job;
      }).
      catch(this.handleError);
  }

  run(id: number): Observable<any> {
    if (!id) {
      throw new Error('Job must have an `id` when running.');
    }
    const url = `${this.jobsUrl}/${id}/run`;
    return this.http.post(url, null).
      map(data => data).
      catch(this.handleError);
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
