import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  title: string = 'Aws app'
  constructor(private breakpointObserver: BreakpointObserver,
    location: Location,
    router: Router) {


    router.events.subscribe(val => {
      if (location.path() == "/uploadData") {
        this.title = 'File uploader';
        console.log(val);
      }
      if (location.path() == "/home") {
        this.title = 'Identifying criminals';
        console.log(val);
      }
      if (location.path() == "/docform") {
        this.title = 'Classification of crimes';
        console.log(val);
      }

    });   
  }

}
  
