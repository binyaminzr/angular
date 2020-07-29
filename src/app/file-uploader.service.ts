import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FileUploaderService {

  constructor(private http : HttpClient) { }
  // My Students: please replace the post url below 
  fileUpload(file: FormData) {
    return this.http.post('http://ec2-54-162-243-220.compute-1.amazonaws.com/upload-ng', file);
  }
}