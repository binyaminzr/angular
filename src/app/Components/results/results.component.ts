import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from 'src/app/Services/file-uploader.service';
import { Suspects } from 'src/app/interfaces/suspects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  suspect;
  constructor(private fileUploadService: FileUploaderService) { }

  ngOnInit(): void {
    console.log(this.suspect)
  }
  
  
}
