import { Component } from '@angular/core';
import {ApicallService} from './apicall.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  public data;
  item:any;
  name:any;
  
  selectedValue:any;
  houses:any;
  selectedOption: string;
  printedOption: string;
  books:any;
  mySelect= '2';
  apidata;
  constructor( private http:ApicallService){

  }


  getresponse(typevariable){
    console.log("inside response")
    this.http.getData(typevariable).subscribe((resp)=>{
      console.warn(resp)
      this.apidata = resp;

    })

  }

 
}
  








