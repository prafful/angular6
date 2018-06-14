import { Component, OnInit } from '@angular/core';
import { LocalserviceService } from '../../myservices/localservice.service';

@Component({
  selector: 'cts-consume-local-service2',
  templateUrl: './consume-local-service2.component.html',
  styleUrls: ['./consume-local-service2.component.css']
})
export class ConsumeLocalService2Component implements OnInit {

  constructor(private localservice:LocalserviceService) {
    
    console.log("I am from local service 2 component")
    console.log(localservice.sweets)
    
  }
  ngOnInit() {
  }

}
