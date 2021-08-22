import { Suspects } from './interfaces/suspects';
import { Component } from '@angular/core';
import { FileUploaderService } from './Services/file-uploader.service';
import {Observable,throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fileObj: File;
  fileUrl: string;
  errorMsg: boolean;
  title = 's3-file-uploader-app';
  suspect:Suspects[];

  constructor(private fileUploadService: FileUploaderService) {
    this.errorMsg = false;
  }

  onFilePicked(event: Event): void {

    this.errorMsg = false;
    console.log(event);
    const FILE = (event.target as HTMLInputElement).files[0];
    this.fileObj = FILE;
    console.log(this.fileObj);
  }

  onFileUpload() {
    if (!this.fileObj) {

      this.errorMsg = true;
      return
    }

    const fileForm = new FormData();
    fileForm.append('file', this.fileObj);
    this.fileUploadService.fileUpload(fileForm).subscribe(res => {
      this.suspect=res;
      console.log(this.suspect);
      this.fileUrl = res['image'];
    });
  }

}