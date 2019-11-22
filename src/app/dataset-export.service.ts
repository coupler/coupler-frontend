import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { SerializationService } from './serialization.service';
import { DatasetExport } from './dataset-export';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatasetExportService extends AbstractService {
  private datasetExportsUrl = environment.apiUrl + '/dataset_exports';

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getDatasetExport(id: number): Observable<DatasetExport | ClientError> {
    const url = `${this.datasetExportsUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      map(data => this.serializer.buildDatasetExport(data)),
      catchError(this.handleClientError)
    );
  }

  downloadDatasetExportUrl(id: number): string {
    return `${this.datasetExportsUrl}/${id}/download`;
  }
}
