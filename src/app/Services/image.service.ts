import { Injectable } from '@angular/core';
 
@Injectable({
 providedIn: 'root'
})
export class ImageService {
 
 public images:string[] = [];
 public path:string = 'https://firebasestorage.googleapis.com/v0/b/angular-901f1.appspot.com/o/'
constructor() {
 this.images[0] = this.path +'biz.JPG' + '?alt=media';
 this.images[1] = this.path +'entermnt.JPG' + '?alt=media';
 this.images[2] = this.path +'politics-icon.png' + '?alt=media';
 this.images[3] = this.path +'sport.JPG' + '?alt=media';
 this.images[4] = this.path +'tech.JPG' + '?alt=media';
}
 
}
