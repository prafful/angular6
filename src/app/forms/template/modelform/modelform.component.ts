import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cts-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  hobbyForm;

  constructor() { }

  ngOnInit() {
    this.hobbyForm = new FormGroup({
          fn:new FormControl(),
          ln:new FormControl(),
          hobby:new FormControl()
    })


  }

  submitUserHobby = function(user){
    console.log(user)
  }




}
