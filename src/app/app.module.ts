import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TableComponent } from './table/table.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    TableComponent,
    CustomTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WavesModule, 
    TableModule, 
    IconsModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
