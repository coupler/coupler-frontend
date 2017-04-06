import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Comparator } from './comparator';
import { environment } from '../environments/environment';

@Injectable()
export class ComparatorService {
  private comparatorsUrl = environment.apiUrl + '/comparators';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getComparators(): Promise<Comparator[]> {
    return this.http.
      get(this.comparatorsUrl).
      toPromise().
      then(response => {
        let data = response.json();
        return data.map(attribs => new Comparator(attribs));
      }).
      catch(this.handleError);
  }

  getComparator(id: number): Promise<Comparator> {
    const url = `${this.comparatorsUrl}/${id}`;
    return this.http.
      get(url).
      toPromise().
      then(response => new Comparator(response.json())).
      catch(this.handleError);
  }

  create(comparator: Comparator): Promise<Comparator> {
    if (comparator.id) {
      throw new Error('Comparator must not already have `id` when creating.');
    }
    const url = this.comparatorsUrl;
    return this.http.
      post(url, comparator.toJSON(), {headers: this.headers}).
      toPromise().
      then(() => comparator).
      catch(this.handleError);
  }

  update(comparator: Comparator): Promise<Comparator> {
    const url = `${this.comparatorsUrl}/${comparator.id}`;
    return this.http.
      put(url, comparator.toJSON(), {headers: this.headers}).
      toPromise().
      then(() => comparator).
      catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
  }
}
