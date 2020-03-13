import { GoogleService } from './shared/google.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google';
  googles : any;

  searchInput: FormControl;

  constructor(private google: GoogleService){
    this.searchInput = new FormControl();
  }

  ngOnInit() {
    
  this.searchData();
    
  }
  searchData(){
    this.searchInput.valueChanges.pipe(debounceTime(500),
    distinctUntilChanged())
    .subscribe(() => {
      this.google.getGoogle().subscribe(data => {
        this.googles = data;
        this.googles = Array.of(this.googles)
        console.log('qww',this.googles)
      }, err => { console.log(err)})
    })
    // )
    // this.google.getGoogle().subscribe(x =>{
    //     this.googles = x.items;
    //     console.log(this.googles)
    //    }, error => {
    //      console.log(error)
    //    })
       
   
    
  }
}
