import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Comparator, ComparatorSet } from './comparator';
import { environment } from '../environments/environment';

export enum ComparatorErrorKind { Client, Validation };

export class ComparatorError {
  constructor(public kind: ComparatorErrorKind, error: any) {}
}

@Injectable()
export class ComparatorService {
  private comparatorsUrl = environment.apiUrl + '/comparators';
  private attributeMap = {
    id: "id",
    kind: "kind",
    options: "options",
    order: "order",
    linkage_id: "linkageId"
  };

  constructor(private http: HttpClient) { }

  getComparators(): Observable<Comparator[] | ComparatorError> {
    const url = this.comparatorsUrl;
    return this.http.get<any[]>(url).map(
      data => data.map(d => this.build(d)),
      this.handleError
    );
  }

  getComparator(id: number): Observable<Comparator | ComparatorError> {
    const url = `${this.comparatorsUrl}/${id}`;
    return this.http.get(url).map(
      data => this.build(data),
      this.handleError
    );
  }

  create(comparator: Comparator): Observable<Comparator | ComparatorError> {
    if (comparator.id) {
      throw new Error('Comparator must not already have `id` when creating.');
    }
    const url = this.comparatorsUrl;
    return this.http.post<{id: number}>(url, this.unbuild(comparator)).map(
      data => {
        comparator.id = data.id;
        return comparator;
      },
      this.handleError
    );
  }

  update(comparator: Comparator): Observable<Comparator | ComparatorError> {
    const url = `${this.comparatorsUrl}/${comparator.id}`;
    let data = JSON.stringify(this.unbuild(comparator));
    return this.http.put(url, this.unbuild(comparator)).map(
      data => comparator,
      this.handleError
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

  handleError(err: HttpErrorResponse): ComparatorError {
    if (err.error instanceof Error) {
      // client-side or network error
      return new ComparatorError(ComparatorErrorKind.Client, err.error);
    } else {
      // unsuccessful response code
      return new ComparatorError(ComparatorErrorKind.Validation, err.error.errors);
    }
  }
}
