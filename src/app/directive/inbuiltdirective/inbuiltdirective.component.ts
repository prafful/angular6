import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuiltdirective',
  templateUrl: './inbuiltdirective.component.html',
  styleUrls: ['./inbuiltdirective.component.css']
})
export class InbuiltdirectiveComponent implements OnInit {

  //friends =['manoj','ashok','priya','deepak','smita']
  friends = []
  name = 'obb'


  constructor() { }

  ngOnInit() {
  }

}
