import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ProblemComponent } from './problem/problem.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProblemComponent
  ],
  imports: [
    RouterTestingModule,
    RouterModule.forRoot(
      [{
        path: 'top',
        component: TopComponent
      }, {
        path: 'problem/:id',
        component: ProblemComponent
      }, {
        path: '',
        redirectTo: '/top',
        pathMatch: 'full'
      }]
    ),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

