import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
    migration_id: "migrationId",
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
    return this.http.get<any[]>(this.jobsUrl).pipe(
      map(data => data.map(d => this.build(d))),
      catchError(this.handleClientError)
    );
  }

  getJob(id: number): Observable<Job | ClientError> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get(url).pipe(
      map(data => this.build(data)),
      catchError(this.handleClientError)
    );
  }

  create(job: Job): Observable<Job | ClientError | ValidationError> {
    if (job.id) {
      throw new Error('Job must not already have `id` when creating.');
    }
    const url = this.jobsUrl;
    return this.http.post<{id: number}>(url, this.unbuild(job)).pipe(
      map(data => {
        job.id = data.id;
        return job;
      }),
      catchError(this.handleError)
    );
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
            if (value) {
              value = new Date(value);
            }
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
