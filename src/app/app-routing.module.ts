import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestInputComponent } from '../app/home/request-input/request-input.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './home/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'urlDetails', component: RequestInputComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
