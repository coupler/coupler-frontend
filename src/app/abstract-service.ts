import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ClientError, ValidationError } from './errors';

export abstract class AbstractService {
  handleClientError(err: HttpErrorResponse): Observable<ClientError> {
    // client-side or network error
    console.error(err.error);
    return Observable.of(new ClientError(err.error));
  }

  handleError(err: HttpErrorResponse): Observable<ClientError | ValidationError> {
    if (err.error instanceof ErrorEvent) {
      // client-side or network error
      return Observable.of(new ClientError(err.error));
    } else {
      // unsuccessful response code
      return Observable.of(new ValidationError(err.error.errors));
    }
  }
}
