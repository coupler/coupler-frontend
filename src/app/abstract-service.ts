import { of as observableOf, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { ClientError, ValidationError } from './errors';

export abstract class AbstractService {
  handleClientError(err: HttpErrorResponse): Observable<ClientError> {
    // client-side or network error
    console.error(err.error);
    return observableOf(new ClientError(err.error));
  }

  handleError(err: HttpErrorResponse): Observable<ClientError | ValidationError> {
    if (err.error instanceof ErrorEvent) {
      // client-side or network error
      return observableOf(new ClientError(err.error));
    } else {
      // unsuccessful response code
      return observableOf(new ValidationError(err.error.errors));
    }
  }
}
