import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { SerializationService } from './serialization.service';
import { Job } from './job';
import { environment } from '../environments/environment';

@Injectable()
export class JobService extends AbstractService {
  private jobsUrl = environment.apiUrl + '/jobs';

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getJobs(): Observable<Job[] | ClientError> {
    return this.http.get<any[]>(this.jobsUrl).pipe(
      map(data => data.map(d => this.serializer.buildJob(d))),
      catchError(this.handleClientError)
    );
  }

  getJob(id: number): Observable<Job | ClientError> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get(url).pipe(
      map(data => this.serializer.buildJob(data)),
      catchError(this.handleClientError)
    );
  }

  create(job: Job): Observable<Job | ClientError | ValidationError> {
    if (job.id) {
      throw new Error('Job must not already have `id` when creating.');
    }
    const url = this.jobsUrl;
    return this.http.post<{id: number}>(url, this.serializer.unbuildJob(job)).pipe(
      map(data => {
        job.id = data.id;
        return job;
      }),
      catchError(this.handleError)
    );
  }
}
