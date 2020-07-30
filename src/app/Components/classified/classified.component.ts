import { ImageService } from './../../Services/image.service';
import { ClassifyService } from './../../Services/classify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-classified',
  templateUrl: './classified.component.html',
  styleUrls: ['./classified.component.css']
})
export class ClassifiedComponent implements OnInit {
  category:string = "Loading...";
  categoryImage:string; 
  constructor(public classifyService:ClassifyService,
              public imageService:ImageService) {}

  ngOnInit() {
    this.classifyService.classify().subscribe(
      res => {
        console.log(res);
        console.log(this.classifyService.categories[res])
        this.category = this.classifyService.categories[res];
        console.log(this.imageService.images[res]);
        this.categoryImage = this.imageService.images[res];
        console.log(this.classifyService.doc)
      }
    )
  }
}
