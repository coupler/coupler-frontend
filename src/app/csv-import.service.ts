import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { CsvImport } from './csv-import';
import { environment } from '../environments/environment';

interface CreateResponse { id: number }
interface UpdateResponse { id: number }
interface ShowResponse {
  id: number;
  original_name: string;
  file_size: number;
  sha1_sum: string;
  fields: any[];
  created_at: string;
  dataset_id?: number;
  rows: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CsvImportService extends AbstractService {
  private apiUrl = environment.apiUrl + '/csv_imports';
  private attributeMap = {
    id: "id",
    original_name: "originalName",
    file_size: "fileSize",
    sha1_sum: "sha1Sum",
    fields: "fields",
    created_at: "createdAt",
    dataset_id: "datasetId",
    data: "data",
    rows: "rows"
  };

  constructor(private http: HttpClient) { super(); }

  getCsvImports(): Observable<CsvImport[] | ClientError> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(d => this.build(d))),
      catchError(this.handleClientError)
    );
  }

  getCsvImport(id: number, rowCount?: number): Observable<CsvImport | ClientError | ValidationError> {
    let url = `${this.apiUrl}/${id}`;
    if (typeof(rowCount) === 'number') {
      url += '?row_count=' + rowCount.toString();
    }
    return this.http.get<ShowResponse>(url).pipe(
      map(data => this.build(data)),
      catchError(this.handleClientError)
    );
  }

  create(csvImport: CsvImport): Observable<CsvImport | ClientError | ValidationError> {
    if (csvImport.id) {
      throw new Error('csvImport must not already have `id` when creating.');
    }
    let data = this.unbuild(csvImport);
    return this.http.post<CreateResponse>(this.apiUrl, data).pipe(
      map(data => {
        csvImport.id = data.id;
        return csvImport;
      }),
      catchError(this.handleError)
    );
  }

  update(csvImport: CsvImport): Observable<CsvImport | ClientError | ValidationError> {
    if (!csvImport.id) {
      throw new Error('csvImport must already have `id` when updating.');
    }
    let url = `${this.apiUrl}/${csvImport.id}`;
    let data = this.unbuild(csvImport);
    return this.http.put<UpdateResponse>(url, data).pipe(
      map(data => {
        return csvImport;
      }),
      catchError(this.handleError)
    );
  }

  build(attribs: any): CsvImport {
    let result = new CsvImport();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.attributeMap) {
        let mappedKey = this.attributeMap[key];
        switch (mappedKey) {
          case 'createdAt':
            if (value) {
              value = new Date(value);
            }
            break;
        }
        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuild(csvImport: CsvImport): any {
    let result = {};
    for (let key in this.attributeMap) {
      let mappedKey = this.attributeMap[key];
      let value = csvImport[mappedKey];
      if (!value) {
        continue;
      }
      result[key] = value;
    }
    return result;
  }
}
