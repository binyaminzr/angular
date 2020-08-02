import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {

  private url = " https://h6xxdwpk67.execute-api.us-east-1.amazonaws.com/beta";
  // private url = "https://dl2qgy18x8.execute-api.us-east-1.amazonaws.com/beta";

  public categories:object = {0: 'Murder', 1: 'robbery', 2: 'kidnapping', 3: 'Theft', 4: 'bribe'};

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
