import {
    RouterModule,
    Routes,
    Router,
    RouteReuseStrategy,
    ActivatedRouteSnapshot,
    DetachedRouteHandle
} from '@angular/router';
import { MyErrorHandler } from './my-error-handler';
export class PreventErrorRouteReuseStrategy implements RouteReuseStrategy {
    shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
    store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void { }
    shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        if (MyErrorHandler.hasRouterError) {
            MyErrorHandler.hasRouterError = false;
            return false;
        }
        return future.routeConfig === curr.routeConfig;
    }
}