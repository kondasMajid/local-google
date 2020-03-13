import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class GoogleService {

  key = environment.apiKey ;
  cx = environment.cx;
  input ;

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