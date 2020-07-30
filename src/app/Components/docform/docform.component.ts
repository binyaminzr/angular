import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassifyService } from 'src/app/Services/classify.service';

@Component({
  selector: 'app-docform',
  templateUrl: './docform.component.html',
  styleUrls: ['./docform.component.css']
})
export class DocformComponent implements OnInit {

  constructor(private classifyService:ClassifyService, 
              private router:Router) { }

  text:string;

  onSubmit(){
    this.classifyService.doc=this.text;
    this.router.navigate(['/classified']);
  }

  ngOnInit() {
  }

}
