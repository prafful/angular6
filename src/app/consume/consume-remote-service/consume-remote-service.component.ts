import { Component, OnInit } from '@angular/core';
import { RemoteserviceService } from '../../myservices/remoteservice.service';
import { UserInfo } from "../../interface/user-info";
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'cts-consume-remote-service',
  templateUrl: './consume-remote-service.component.html',
  styleUrls: ['./consume-remote-service.component.css']
})
export class ConsumeRemoteServiceComponent implements OnInit {
  userinfo:UserInfo;
  observableUserInfo:Observable<UserInfo>
  constructor(private remoteservice:RemoteserviceService) { 
    //console.log(remoteservice.getRemoteData())
  }
  ngOnInit() {
    this.getRemoteData()
  }
 getRemoteData(){
   console.log("this is remote data")
   this.observableUserInfo = this.remoteservice.getRemoteDataFromService()
   this.observableUserInfo.subscribe(
    (user) =>{
      this.userinfo = user
      console.log(this.userinfo)
    },
    (err:HttpErrorResponse) =>{
      if(err.error instanceof Error){
        console.log('Server-side error')
      }else{
        console.log('Client side error')
      }
    }
   )

  /*  this.observableUserInfo.subscribe(
     function(user){
        this.userinfo = user
        console.log(this.userinfo)
     }
   ) */
   console.log("________________________")
} 

}
