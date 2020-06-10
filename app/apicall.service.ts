import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  basicurl = "https://anapioficeandfire.com/api/";
  constructor( private http : HttpClient) { 

    
  }

  getData(typevariable){
    var newurl =this.basicurl + typevariable;
    console.log(newurl)
    return this.http.get(newurl)
  }
}
