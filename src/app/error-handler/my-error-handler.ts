import { ErrorHandler, Injector, Injectable } from '@angular/core';
import {
    Router,
} from '@angular/router';


@Injectable()
export class MyErrorHandler implements ErrorHandler {

    static hasRouterError: boolean;
    constructor(private inj: Injector) { }

    handleError(error: any): void {
        console.error('MyErrorHandler: ' + error);
        if (MyErrorHandler.hasRouterError) {
            let router = this.inj.get(Router);
            router.navigated = false;
        }
    }
}


export function MyRouterErrorHandler(error: any) {
    console.error('RouterErrorHandler: ' + error);
    MyErrorHandler.hasRouterError = true;
    throw error;
  }