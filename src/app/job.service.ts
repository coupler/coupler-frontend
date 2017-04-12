import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Job } from './job';
import { environment } from '../environments/environment';

@Injectable()
export class JobService {
  private jobsUrl = environment.apiUrl + '/jobs';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getJobs(): Promise<Job[]> {
    return this.http.
      get(this.jobsUrl).
      toPromise().
      then(response => {
        let data = response.json();
        return data.map(attribs => new Job(attribs));
      }).
      catch(this.handleError);
  }

  getJob(id: number): Promise<Job> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.
      get(url).
      toPromise().
      then(response => new Job(response.json())).
      catch(this.handleError);
  }

  create(job: Job): Promise<Job> {
    if (job.id) {
      throw new Error('Job must not already have `id` when creating.');
    }
    const url = this.jobsUrl;
    return this.http.
      post(url, job.toJSON(), {headers: this.headers}).
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
}
