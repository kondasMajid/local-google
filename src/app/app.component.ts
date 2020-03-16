import { IGoogleData } from './shared/search.model';
import { async } from '@angular/core/testing';
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
  public googleData : any[];
  
  searchword: string="";
  public passDataSeconds: any[]=[];
  
  public passDataResults: any[]=[];

  inputKeyword :  string = '';
  public allGoogleData;
   
  convert;
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
  searchData() { 
      return this.googleService.getGoogle(this.inputKeyword).subscribe(x =>{
       
        
         //returning the titles,ddescription,link, displaylinks etc
       this.googleData = x.items;
       console.log('googleData', this.googleData);
       
       //returung the number of results found by the search
       this.passDataResults = x.searchInformation.totalResults;
      //  console.log('passDataResults', this.passDataResults);
        
        //returning the result of the seconds to find result
       this.passDataSeconds = x.searchInformation.formattedSearchTime;
      //  console.log('passDataSeconds', this.passDataSeconds);
        

       this.convert = x.queries;
       console.log('convert', this.convert);

    
        
       
      //  this.googleData= x;
        // console.log('googleData',this.googleData)
       }, error => {
         console.log("error here",error)
       })
       
 }

}
 