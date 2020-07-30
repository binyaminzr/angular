import { Component, OnInit } from '@angular/core';
import { Suspects } from 'src/app/interfaces/suspects';
import { FileUploaderService } from 'src/app/file-uploader.service';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {


  ngOnInit(): void {
  }
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
