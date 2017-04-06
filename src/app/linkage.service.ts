import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Linkage } from './linkage';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageService {
  private linkagesUrl = environment.apiUrl + '/linkages';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getLinkages(): Promise<Linkage[]> {
    return this.http.
      get(this.linkagesUrl).
      toPromise().
      then(response => {
        let data = response.json();
        return data.map(attribs => new Linkage(attribs));
      }).
      catch(this.handleError);
  }

  getLinkage(id: number): Promise<Linkage> {
    const url = `${this.linkagesUrl}/${id}`;
    return this.http.
      get(url).
      toPromise().
      then(response => new Linkage(response.json())).
      catch(this.handleError);
  }

  create(linkage: Linkage): Promise<Linkage> {
    if (linkage.id) {
      throw new Error('Linkage must not already have `id` when creating.');
    }
    const url = this.linkagesUrl;
    return this.http.
      post(url, linkage.toJSON(), {headers: this.headers}).
      toPromise().
      then(() => linkage).
      catch(this.handleError);
  }

  update(linkage: Linkage): Promise<Linkage> {
    const url = `${this.linkagesUrl}/${linkage.id}`;
    return this.http.
      put(url, linkage.toJSON(), {headers: this.headers}).
      toPromise().
      then(() => linkage).
      catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
  }
}
