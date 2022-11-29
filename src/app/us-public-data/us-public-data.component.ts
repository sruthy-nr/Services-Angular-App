import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-us-public-data',
  templateUrl: './us-public-data.component.html',
  styleUrls: ['./us-public-data.component.css']
})
export class UsPublicDataComponent {
  constructor(private api:ApiService){
    api.fetchUsPublic().subscribe(
      (response)=>
      {
        this.uspublic=response;
      }
    )
  }
  uspublic:any=[]
}
