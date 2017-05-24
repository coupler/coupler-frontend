import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comparator } from './comparator';
import { environment } from '../environments/environment';

@Injectable()
export class ComparatorService {
  private comparatorsUrl = environment.apiUrl + '/comparators';
  private headers = new Headers({'Content-Type': 'application/json'});
  private attributeMap = {
    id: "id",
    kind: "kind",
    set_1: "set1",
    set_2: "set2",
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
    return result;
  }

  unbuild(comparator: Comparator): any {
    let result = {};
    for (let key in this.attributeMap) {
      let mappedKey = this.attributeMap[key];
      result[key] = comparator[mappedKey];
    }
    return result;
  }

  handleError(error: any) {
    console.error(error);
  }
}
