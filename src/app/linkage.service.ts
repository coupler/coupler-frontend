import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { Linkage } from './linkage';
import { DatasetService } from './dataset.service';
import { ComparatorService } from './comparator.service';
import { JobService } from './job.service';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageService extends AbstractService {
  private linkagesUrl = environment.apiUrl + '/linkages';
  private attributeMap = {
    id: "id",
    name: "name",
    description: "description",
    dataset_1_id: "dataset1Id",
    dataset_2_id: "dataset2Id",
    dataset_1: "dataset1",
    dataset_2: "dataset2",
    comparators: "comparators",
    jobs: "jobs"
  };

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService,
    private comparatorService: ComparatorService,
    private jobService: JobService
  ) {
    super();
  }

  getLinkages(): Observable<Linkage[] | ClientError> {
    return this.http.get<any[]>(this.linkagesUrl).pipe(
      map(data => data.map(d => this.build(d))),
      catchError(this.handleClientError)
    );
  }

  getLinkage(id: number): Observable<Linkage | ClientError> {
    const url = `${this.linkagesUrl}/${id}`;
    return this.http.get(url).pipe(
      map(data => this.build(data)),
      catchError(this.handleClientError)
    );
  }

  create(linkage: Linkage): Observable<Linkage | ClientError | ValidationError> {
    if (linkage.id) {
      throw new Error('Linkage must not already have `id` when creating.');
    }
    const url = this.linkagesUrl;
    let data = JSON.stringify(this.unbuild(linkage));
    return this.http.post<{id: number}>(url, this.unbuild(linkage)).pipe(
      map(data => {
        linkage.id = data.id;
        return linkage;
      }),
      catchError(this.handleError)
    );
  }

  update(linkage: Linkage): Observable<Linkage | ClientError | ValidationError> {
    const url = `${this.linkagesUrl}/${linkage.id}`;
    return this.http.put(url, this.unbuild(linkage)).pipe(
      map(data => linkage),
      catchError(this.handleError)
    );
  }

  delete(linkage: Linkage): Observable<Linkage | ClientError> {
    const url = `${this.linkagesUrl}/${linkage.id}`;
    return this.http.delete(url).pipe(
      map(data => linkage),
      catchError(this.handleClientError)
    );
  }

  build(attribs: any): Linkage {
    let result = new Linkage();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.attributeMap) {
        let mappedKey = this.attributeMap[key];

        switch (mappedKey) {
          case 'dataset1':
          case 'dataset2':
            value = this.datasetService.build(value);
            break;
          case 'comparators':
            value = value.map(cattribs => {
              return this.comparatorService.build(cattribs);
            });
            break;
          case 'jobs':
            value = value.map(jattribs => {
              return this.jobService.build(jattribs);
            });
            break;
        }

        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuild(linkage: Linkage): any {
    let result = {};
    for (let key in this.attributeMap) {
      let mappedKey = this.attributeMap[key];
      let value = linkage[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'dataset1':
        case 'dataset2':
        case 'comparators':
        case 'jobs':
          continue;

        case 'dataset1Id':
        case 'dataset2Id':
          value = +value;
          break;
      }

      result[key] = value;
    }
    return result;
  }
}
