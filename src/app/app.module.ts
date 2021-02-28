import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RequestInputComponent } from './home/request-input/request-input.component';
import { routes } from '../app/app-routing.module';
import { LandingComponent } from './home/landing/landing.component';


import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { UrlDatasGridComponent } from './home/url-datas-grid/url-datas-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestInputComponent,
    LandingComponent,
    UrlDatasGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
