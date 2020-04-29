import { Observable } from 'rxjs/observable';
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IGoogleData } from './search.model';
import { debounce, debounceTime, switchMap } from 'rxjs/operators';
// import { start } from 'repl';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: "root"
})
export class GoogleService {
  key = environment.apiKey;
  cx = environment.cx;
  input: string;

  constructor(private http: HttpClient) { }

  headerDict = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };
  get_Input;

  nextGoogle(input: string): Observable<IGoogleData> {
    return this.http.get<IGoogleData>('https://www.googleapis.com/customsearch/v1?key='
      + environment.apiKey + '&cx=' + environment.cx + '&q=' + input + 'start=' + 11 + 'num=' + 0 +
      this.requestOptions)
  }

  getGoogle(input: string): Observable<IGoogleData> {
    return this.http.get<IGoogleData>('https://www.googleapis.com/customsearch/v1?key='
      + environment.apiKey + '&cx=' + environment.cx + '&q=' + input,
      this.requestOptions)
  }

  // new method trying up for the debounce to take effect.
  // getGoogle(input) : Observable<IGoogleData>{
  //    return this.input.pipe((debounceTime(500), 
  //   switchMap( text => this.http.get<IGoogleData>('https://www.googleapis.com/customsearch/v1?key='
  //   + environment.apiKey + '&cx=' + environment.cx + '&q=' + input,
  //  this.requestOptions)

  //   ))) 

  // error to search on google 

  // Property 'pipe' does not exist on type 'string'.

  // }
}
