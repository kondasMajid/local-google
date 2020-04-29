import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { NextpageComponent } from './nextpage/nextpage.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GoogleSearchComponent } from './google-search/google-search.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchHeaderComponent,
    NextpageComponent,
    GoogleSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
