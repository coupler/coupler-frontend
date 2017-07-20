import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comparator, ComparatorSet } from './comparator';
import { environment } from '../environments/environment';

@Injectable()
export class ComparatorService {
  private comparatorsUrl = environment.apiUrl + '/comparators';
  private headers = new Headers({'Content-Type': 'application/json'});
  private attributeMap = {
    id: "id",
    kind: "kind",
    options: "options",
    order: "order",
    linkage_id: "linkageId"
  };

  constructor(private http: Http) { }

  getComparators(): Promise<Comparator[]> {
    return this.http.
      get(this.comparatorsUrl).
      toPromise().
      then(response => {
        let data = response.json();
        return data.map(attribs => this.build(attribs));
      }).
      catch(this.handleError);
  }

  getComparator(id: number): Promise<Comparator> {
    const url = `${this.comparatorsUrl}/${id}`;
    return this.http.
      get(url).
      toPromise().
      then(response => this.build(response.json())).
      catch(this.handleError);
  }

  create(comparator: Comparator): Promise<Comparator> {
    if (comparator.id) {
      throw new Error('Comparator must not already have `id` when creating.');
    }
    const url = this.comparatorsUrl;
    let data = JSON.stringify(this.unbuild(comparator));
    return this.http.
      post(url, data, {headers: this.headers}).
      toPromise().
      then(() => comparator).
      catch(this.handleError);
  }

  update(comparator: Comparator): Promise<Comparator> {
    const url = `${this.comparatorsUrl}/${comparator.id}`;
    let data = JSON.stringify(this.unbuild(comparator));
    return this.http.
      put(url, data, {headers: this.headers}).
      toPromise().
      then(() => comparator).
      catch(this.handleError);
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

  handleError(error: any) {
    console.error(error);
  }
}
