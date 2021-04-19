import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './logging.service';
import { ErrorService } from './error.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(errorResponse: any) {

    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    // const notifier = this.injector.get(NotificationService);

    let message;
    let stackTrace;

    if (errorResponse instanceof ErrorEvent) {
      message = 'Client Error:' + errorService.getClientMessage(errorResponse.error);
      stackTrace = errorService.getClientStack(errorResponse.error);
    } else {
      message = 'Server Error:' + errorService.getServerMessage(errorResponse);
      stackTrace = errorService.getServerStack(errorResponse);
    }

   
    logger.logError(message, stackTrace);
    console.error(errorResponse);
  }
}
