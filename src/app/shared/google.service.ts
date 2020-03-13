// import { environment } from './../../environments/environment.prod';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import {environment}
@Injectable({
  providedIn: 'root'
})


export class GoogleService {

  key = environment.apiKey ;
  cx = environment.cx;
  input ;
  // googleURL = 'https://www.googleapis.com/customsearch/v1?key=' + environment.apiKey + '&cx=' + environment.cx + '&q=lectures';
  constructor(private http: HttpClient) { }


  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };
 

  getGoogle() {
  return   this.http.get('https://www.googleapis.com/customsearch/v1?key='
   + environment.apiKey + '&cx=' + environment.cx+'&q='+this.input, 
  this.requestOptions)
  }
}