import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    public images: string[] = [];
    public path: string = 'https://firebasestorage.googleapis.com/v0/b/angularhome-ee369.appspot.com/o/'

    constructor() {
        this.images[0] = this.path + 'murder.png' + '?alt=media';
        this.images[1] = this.path + 'robbery.jpg' + '?alt=media';
        this.images[2] = this.path + 'kidnapping.jpg' + '?alt=media';
        this.images[3] = this.path + 'Theft.png' + '?alt=media';
        this.images[4] = this.path + 'bribe.jpg' + '?alt=media';
    }

}
