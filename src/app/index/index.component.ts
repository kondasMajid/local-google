import { NextpageComponent } from './../nextpage/nextpage.component';
import { IGoogleData } from "./../shared/search.model";
import { GoogleService } from "./../shared/google.service";
import { Component, OnInit, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { EventEmitter } from 'events';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  @Output() nextpage;
  title = "google";
  googleData: any;

  searchword: string = "";
  passDataSeconds: any;

  passDataResults: any;

  inputKeyword: string = ""; //taking user input  from input field

  CopyinputKeyword = "hello tyy";

  allGoogleData;
  // nextpage;

  convert;
  // inputKeyword: FormControl;
  // this.inputKeyword =

  searchTerm = new Subject<string>();
  results$: Observable<IGoogleData[]>;
  constructor(private googleService: GoogleService, private route: Router) {
    // this.inputKeyword = new FormControl();
    //  this.inputKeyword =  this.googleService.input;
  }

  ngOnInit() {
    // this.searchData();
  }


  results;


  value: string;
  searchData(value: string) {
    this.value = value;

    this.results = this.googleService.getGoogle(value)
      .subscribe(x => {

        // this.route.navigate(['/index']) 
        //returning the titles,ddescription,link, displaylinks etc
        this.googleData = x.items;
        //  console.log('googleData', this.googleData);


        //returung the number of results found by the search
        this.passDataResults = x.searchInformation.totalResults;
        //  console.log('passDataResults', this.passDataResults);


        //returning the result of the seconds to find result
        this.passDataSeconds = x.searchInformation.formattedSearchTime;
        //  console.log('passDataSeconds', this.passDataSeconds);

        //  this.convert = x.queries;
        //  console.log('convert', this.convert);

        //  this.googleData= x;
        // console.log('googleData',this.googleData)
      }, error => {
        console.log("error here", error)
      })
  }




  nextPage() {
    return this.googleService.nextGoogle(this.inputKeyword).subscribe(y => {
      this.nextpage = y.queries.nextPage;
      this.route.navigate(["/nextpage"]);
      console.log(this.nextpage);
    });
    // console.log('hello next page')
  }

} 
