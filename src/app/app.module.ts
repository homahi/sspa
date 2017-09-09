import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent
  ],
  imports: [
    RouterModule.forRoot(
      [{
        path: 'top',
        component: TopComponent
      }, {
        path: '',
        redirectTo: '/top',
        pathMatch: 'full'
      }]
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
