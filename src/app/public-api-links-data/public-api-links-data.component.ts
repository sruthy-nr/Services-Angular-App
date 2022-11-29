import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-api-links-data',
  templateUrl: './public-api-links-data.component.html',
  styleUrls: ['./public-api-links-data.component.css']
})
export class PublicApiLinksDataComponent {
constructor(private api:ApiService){
  api.fetchApiLinks().subscribe(
    (response)=>{
      this.publicapilinks=response;
    }
  )
}
  publicapilinks:any=[]
  
}
