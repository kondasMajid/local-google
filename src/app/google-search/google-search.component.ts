import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.css']
})
export class GoogleSearchComponent implements OnInit {
googleData: boolean;
  constructor() { 
    this.googleData = true;
  }

  ngOnInit() {
  }

  inputKeyword = 'ssssssssssssssss'

}
