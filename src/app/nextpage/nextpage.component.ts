import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleService } from '../shared/google.service';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {

  @Input() inputKeyword: string;
  // nextedpage: any;

  constructor(private googleService: GoogleService, private route:Router) { }

  ngOnInit() {
    // this.nextedPage()
    console.log(this.inputKeyword,'input ')
  }
  nextpage;
  nextedPage(){
     return this.googleService.getGoogle(this.inputKeyword)
       .subscribe(y => {
       const nextedpage = y.queries.nextPage;
          this.nextpage = y
          // this.route.navigate(['/nextpage'])
          console.log(y, 'yyyyy')
         console.log(nextedpage , 'next')
       });
    console.log(this.inputKeyword)
  }
}
