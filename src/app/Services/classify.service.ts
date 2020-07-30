import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {

  private url = "https://rniqbt3fbh.execute-api.us-east-1.amazonaws.com/beta";

  public categories:object = {0: 'mur', 1: 'entertainment', 2: 'politics', 3: 'sport', 4: 'tech'};

  public doc:string;

  classify():Observable<any>{
    let json = {
      "articles":[
        {"text":this.doc}
      ]
    }
    let body = JSON.stringify(json);
    return this.http.post<any>(this.url,body).pipe(
     map(res=>{
       let final= res.body.replace('[','');
       final= final.replace(']','');
       return final;
     })
    ) 
  }

  constructor(private http:HttpClient) { }
}
