import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { SerializationService } from './serialization.service';
import { Migration } from './migration';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MigrationService extends AbstractService {
  private migrationsUrl = environment.apiUrl + '/migrations';

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getMigrations(): Observable<Migration[] | ClientError> {
    return this.http.get<any[]>(this.migrationsUrl).pipe(
      map(data => data.map(d => this.serializer.buildMigration(d))),
      catchError(this.handleClientError)
    );
  }

  getMigration(id: number): Observable<Migration | ClientError> {
    const url = `${this.migrationsUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      map(data => this.serializer.buildMigration(data)),
      catchError(this.handleClientError)
    );
  }

  create(migration: Migration): Observable<Migration | ClientError | ValidationError> {
    if (migration.id) {
      throw new Error('Migration must not already have `id` when creating.');
    }
    const url = this.migrationsUrl;
    let data = JSON.stringify(this.serializer.unbuildMigration(migration));
    return this.http.post<{id: number}>(url, this.serializer.unbuildMigration(migration)).pipe(
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
}
