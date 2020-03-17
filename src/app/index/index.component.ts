import { GoogleService } from './../shared/google.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'google';
  googleData : any[];
  
  searchword: string=""; 
  passDataSeconds: any[]=[];
  
  passDataResults: any[]=[];

  inputKeyword :  string = '';
  allGoogleData;
  nextpage;
  

  convert;
  // inputKeyword: FormControl;
  // this.inputKeyword =
  constructor(private googleService: GoogleService, private route:Router){
    // this.inputKeyword = new FormControl();
  //  this.inputKeyword =  this.googleService.input;
  }

  @Input() search: string; 
 
  ngOnInit() {  
  // this.searchData();
  } 

  nextPage(){
    return this.googleService.getGoogle(this.inputKeyword)
      .subscribe(y => {
        this.nextpage = y.queries.nextPage;
        this.route.navigate(['/nextpage'])
        console.log(this.nextpage)
      });
    
    // console.log('hello next page')
  }

  searchData() { 
      return this.googleService.getGoogle(this.inputKeyword).subscribe(x =>{
       
        this.route.navigate(['/app-index']) 
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
      //  console.log('convert', this.convert);

      //  this.googleData= x;
        // console.log('googleData',this.googleData)
       }, error => {
         console.log("error here",error)
       })
   }
} 
