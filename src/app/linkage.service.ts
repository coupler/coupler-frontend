import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Linkage } from './linkage';
import { DatasetService } from './dataset.service';
import { ComparatorService } from './comparator.service';
import { JobService } from './job.service';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageService {
  private linkagesUrl = environment.apiUrl + '/linkages';
  private headers = new Headers({'Content-Type': 'application/json'});
  private attributeMap = {
    id: "id",
    name: "name",
    description: "description",
    dataset_1_id: "dataset1Id",
    dataset_2_id: "dataset2Id",
    dataset_1: "dataset1",
    dataset_2: "dataset2",
    comparators: "comparators",
    jobs: "jobs"
  };

  constructor(
    private http: Http,
    private datasetService: DatasetService,
    private comparatorService: ComparatorService,
    private jobService: JobService
  ) { }

  getLinkages(): Promise<Linkage[]> {
    return this.http.
      get(this.linkagesUrl).
      toPromise().
      then(response => {
        let data = response.json();
        return data.map(attribs => {
          return this.build(attribs);
        });
      })
  }

  getLinkage(id: number): Promise<Linkage> {
    const url = `${this.linkagesUrl}/${id}`;
    return this.http.
      get(url).
      toPromise().
      then(response => {
        let data = response.json();
        return this.build(data);
      }).
      catch(this.handleError);
  }

  create(linkage: Linkage): Promise<any> {
    if (linkage.id) {
      throw new Error('Linkage must not already have `id` when creating.');
    }
    const url = this.linkagesUrl;
    let data = JSON.stringify(this.unbuild(linkage));
    return this.http.
      post(url, data, {headers: this.headers}).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  update(linkage: Linkage): Promise<any> {
    const url = `${this.linkagesUrl}/${linkage.id}`;
    let data = JSON.stringify(this.unbuild(linkage));
    return this.http.
      put(url, data, {headers: this.headers}).
      toPromise().
      then(response => response.json()).
      catch(this.handleError);
  }

  delete(linkage: Linkage): Promise<Linkage> {
    const url = `${this.linkagesUrl}/${linkage.id}`;
    return this.http.
      delete(url, {headers: this.headers}).
      toPromise().
      then(() => linkage).
      catch(this.handleError);
  }

  build(attribs: any): Linkage {
    let result = new Linkage();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.attributeMap) {
        let mappedKey = this.attributeMap[key];

        switch (mappedKey) {
          case 'dataset1':
          case 'dataset2':
            value = this.datasetService.build(value);
            break;
          case 'comparators':
            value = value.map(cattribs => {
              return this.comparatorService.build(cattribs);
            });
            break;
          case 'jobs':
            value = value.map(jattribs => {
              return this.jobService.build(jattribs);
            });
            break;
        }

        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuild(linkage: Linkage): any {
    let result = {};
    for (let key in this.attributeMap) {
      let mappedKey = this.attributeMap[key];
      let value = linkage[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'dataset1':
        case 'dataset2':
        case 'comparators':
        case 'jobs':
          continue;

        case 'dataset1Id':
        case 'dataset2Id':
          value = +value;
          break;
      }

      result[key] = value;
    }
    return result;
  }

  handleError(error: any) {
    console.error(error);
  }
}
