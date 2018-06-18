import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'cts-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myNameChild

  @Output() parcelToParent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }


  sendToParentNow = function(received){
    console.log("sending to parent..")
    this.parcelToParent.emit(received)
  }

}
