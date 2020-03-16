import { GoogleService } from './shared/google.service';
import { Component, Input } from '@angular/core';
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
  public googleData : any[] =[] ;

searchword: string="";

 inputKeyword :  string = '';
 public allGoogleData: any;
   
  // inputKeyword: FormControl;
  // this.inputKeyword =
  constructor(private googleService: GoogleService){
    // this.inputKeyword = new FormControl();
  //  this.inputKeyword =  this.googleService.input;
  }


  @Input() search: string; 
  
  ngOnInit() {  
  //  this.inputKeyword = this.googleService.input
  // this.searchData();
    
  } 
  searchData(){ 
      return this.googleService.getGoogle(this.inputKeyword).subscribe(x =>{
        this.googleData= x.items;
        this.allGoogleData = x.searchInformation;
        // console.log("input ",this.inputKeyword)
        console.log("data", this.allGoogleData.searchTime)
        // this.inputKeyword = this.googleService.input;
        console.log(this.googleData)
       }, error => {
         console.log(error)
       })
       
 }

}
 