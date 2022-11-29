import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-info-data',
  templateUrl: './user-info-data.component.html',
  styleUrls: ['./user-info-data.component.css']
})
export class UserInfoDataComponent {
constructor(private api:ApiService){
  api.fetchUserInfo().subscribe(
    (response)=>
    {
      this.userinfo=response;
    }
  )
}
userinfo:any=[]
}
