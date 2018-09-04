import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { DatasetService } from './dataset.service';
import { ClientError, ValidationError } from './errors';
import { Migration } from './migration';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MigrationService extends AbstractService {
  private migrationsUrl = environment.apiUrl + '/migrations';
  private attributeMap = {
    id: "id",
    description: "description",
    operations: "operations",
    input_dataset_id: "inputDatasetId",
    output_dataset_id: "outputDatasetId",
    input_dataset: "inputDataset",
    output_dataset: "outputDataset"
  };

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService
  ) {
    super();
  }

  getMigrations(): Observable<Migration[] | ClientError> {
    return this.http.get<any[]>(this.migrationsUrl).pipe(
      map(data => data.map(d => this.build(d))),
      catchError(this.handleClientError)
    );
  }

  getMigration(id: number): Observable<Migration | ClientError> {
    const url = `${this.migrationsUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      map(data => this.build(data)),
      catchError(this.handleClientError)
    );
  }

  create(migration: Migration): Observable<Migration | ClientError | ValidationError> {
    if (migration.id) {
      throw new Error('Migration must not already have `id` when creating.');
    }
    const url = this.migrationsUrl;
    let data = JSON.stringify(this.unbuild(migration));
    return this.http.post<{id: number}>(url, this.unbuild(migration)).pipe(
      map(data => {
        migration.id = data.id;
        return migration;
      }),
      catchError(this.handleError)
    );
  }

  /*
  update(migration: Migration): Observable<Migration | ClientError | ValidationError> {
    const url = `${this.migrationsUrl}/${migration.id}`;
    return this.http.put(url, this.unbuild(migration)).pipe(
      map(data => migration),
      catchError(this.handleError)
    );
  }
  */

  /*
  delete(migration: Migration): Observable<Migration | ClientError> {
    const url = `${this.migrationsUrl}/${migration.id}`;
    return this.http.delete(url).pipe(
      map(data => migration),
      catchError(this.handleClientError)
    );
  }
  */

  build(attribs: any): Migration {
    let result = new Migration();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.attributeMap) {
        let mappedKey = this.attributeMap[key];

        switch (mappedKey) {
          case 'inputDataset':
          case 'outputDataset':
            value = this.datasetService.build(value);
            break;
        }

        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuild(migration: Migration): any {
    let result = {};
    for (let key in this.attributeMap) {
      let mappedKey = this.attributeMap[key];
      let value = migration[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'inputDataset':
          continue;

        case 'inputDatasetId':
          value = +value;
          break;

        case 'outputDataset':
          value = this.datasetService.unbuild(value);
          break;
      }

      result[key] = value;
    }
    return result;
  }
}
