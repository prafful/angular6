import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../interface/user-info';


@Injectable()
export class RemoteserviceService {

  constructor(private httpclient:HttpClient) { }

  getRemoteDataFromService():Observable<UserInfo>{
    return this.httpclient.get<UserInfo>('https://jsonplaceholder.typicode.com/users')
  }


}
