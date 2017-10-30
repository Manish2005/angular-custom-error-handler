import { ErrorHandler, Injector, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router, RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExampleFormComponent } from './example-form/example-form.component';

import { MyErrorHandler, MyRouterErrorHandler } from './error-handler/my-error-handler';
import { PreventErrorRouteReuseStrategy } from './error-handler/route-reuse-strategy';

const appRoutes: Routes = [
  { path: 'forms', component: ExampleFormComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      errorHandler: MyRouterErrorHandler
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExampleFormComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler },
    { provide: RouteReuseStrategy, useClass: PreventErrorRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }

}

