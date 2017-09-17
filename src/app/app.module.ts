import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ProblemComponent } from './problem/problem.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProblemComponent,
    NavigationComponent
  ],
  imports: [
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
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

