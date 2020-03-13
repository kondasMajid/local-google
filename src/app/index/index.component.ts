import { GoogleService } from './../shared/google.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private google: GoogleService) { }

  ngOnInit() {
    // this.google.getGoogle().s
    
  }

}
