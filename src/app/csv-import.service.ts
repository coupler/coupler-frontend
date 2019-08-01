import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { SerializationService } from './serialization.service';
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

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getCsvImports(): Observable<CsvImport[] | ClientError> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(d => this.serializer.buildCsvImport(d))),
      catchError(this.handleClientError)
    );
  }

  getCsvImport(id: number, rowCount?: number): Observable<CsvImport | ClientError | ValidationError> {
    let url = `${this.apiUrl}/${id}`;
    if (typeof(rowCount) === 'number') {
      url += '?row_count=' + rowCount.toString();
    }
    return this.http.get<ShowResponse>(url).pipe(
      map(data => this.serializer.buildCsvImport(data)),
      catchError(this.handleClientError)
    );
  }

  downloadCsvImportUrl(id: number): string {
    return `${this.apiUrl}/${id}/download`;
  }

  create(csvImport: CsvImport): Observable<CsvImport | ClientError | ValidationError> {
    if (csvImport.id) {
      throw new Error('csvImport must not already have `id` when creating.');
    }
    let data = this.serializer.unbuildCsvImport(csvImport);
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
    let data = this.serializer.unbuildCsvImport(csvImport);
    return this.http.put<UpdateResponse>(url, data).pipe(
      map(data => {
        return csvImport;
      }),
      catchError(this.handleError)
    );
  }
}
