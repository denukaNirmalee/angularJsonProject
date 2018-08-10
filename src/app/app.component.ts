import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor(private http: Http){
    console.log('Hello fellow user');
     this.getContacts();
     this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }

  //data is where we store response from the API
  //contacts is what the API has called the arrays.
  // Then we assign all attributes (that the API has) to the contact

  getContacts(){
    this.getData().subscribe(data =>{
      console.log(data);
      this.data = data
    })
  }
}
