import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { Comparator, ComparatorSet } from './comparator';
import { environment } from '../environments/environment';

@Injectable()
export class ComparatorService extends AbstractService {
  private comparatorsUrl = environment.apiUrl + '/comparators';
  private attributeMap = {
    id: "id",
    kind: "kind",
    options: "options",
    order: "order",
    linkage_id: "linkageId"
  };

  constructor(private http: HttpClient) {
    super();
  }

  getComparators(): Observable<Comparator[] | ClientError> {
    const url = this.comparatorsUrl;
    return this.http.get<any[]>(url).pipe(
      map(data => data.map(d => this.build(d))),
      catchError(this.handleClientError)
    );
  }

  getComparator(id: number): Observable<Comparator | ClientError> {
    const url = `${this.comparatorsUrl}/${id}`;
    return this.http.get(url).pipe(
      map(data => this.build(data)),
      catchError(this.handleClientError)
    );
  }

  create(comparator: Comparator): Observable<Comparator | ClientError | ValidationError> {
    if (comparator.id) {
      throw new Error('Comparator must not already have `id` when creating.');
    }
    const url = this.comparatorsUrl;
    return this.http.post<{id: number}>(url, this.unbuild(comparator)).pipe(
      map(data => {
        comparator.id = data.id;
        return comparator;
      }),
      catchError(this.handleError)
    );
  }

  update(comparator: Comparator): Observable<Comparator | ClientError | ValidationError> {
    const url = `${this.comparatorsUrl}/${comparator.id}`;
    let data = JSON.stringify(this.unbuild(comparator));
    return this.http.put(url, this.unbuild(comparator)).pipe(
      map(data => comparator),
      catchError(this.handleError)
    );
  }

  build(attribs: any): Comparator {
    let result = new Comparator();
    for (let key in attribs) {
      if (key in this.attributeMap) {
        let mappedKey = this.attributeMap[key];
        result[mappedKey] = attribs[key];
      }
    }
    if ('set_1' in attribs && 'set_2' in attribs) {
      result.sets = attribs.set_1.map((field1, i) => {
        let value = { field1: field1, field2: attribs.set_2[i] };
        return value as ComparatorSet;
      });
    }
    return result;
  }

  unbuild(comparator: Comparator): any {
    let result: any = {};
    for (let key in this.attributeMap) {
      let mappedKey = this.attributeMap[key];
      result[key] = comparator[mappedKey];
    }
    result.set_1 = [];
    result.set_2 = [];
    comparator.sets.forEach(s => {
      result.set_1.push(s.field1);
      result.set_2.push(s.field2);
    });
    return result;
  }
}
