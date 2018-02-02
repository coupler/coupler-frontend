import { HttpErrorResponse } from '@angular/common/http';
import { ClientError, ValidationError } from './errors';

export abstract class AbstractService {
  handleClientError(err: HttpErrorResponse): ClientError {
    if (err.error instanceof Error) {
      // client-side or network error
      return new ClientError(err.error);
    } else {
      console.error(err);
      throw new Error('unhandled error response');
    }
  }

  handleError(err: HttpErrorResponse): ClientError | ValidationError {
    if (err.error instanceof Error) {
      // client-side or network error
      return new ClientError(err.error);
    } else {
      // unsuccessful response code
      return new ValidationError(err.error.errors);
    }
  }
}
