import { GoogleService } from './shared/google.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google';
  public googleData:any;

searchword: string;

  inputKeyword: FormControl;

  constructor(private googleService: GoogleService){
    this.inputKeyword = new FormControl();
    // this.inputKeyword = this.googleService.input;
  }

  ngOnInit() {  
   
  // this.searchData();
    
  } 
  searchData(){ 
      return this.googleService.getGoogle().subscribe(x =>{
        this.googleData= x.items;
        console.log(this.googleData)
       }, error => {
         console.log(error)
       })
 }

}
 