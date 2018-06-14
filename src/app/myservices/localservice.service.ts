import { Injectable } from '@angular/core';

@Injectable()
export class LocalserviceService {

  //private sweets = ['rasogulla','gulabjamun', 'katli','jalebi']
  sweets = ['rasogulla','gulabjamun', 'katli','jalebi']

  constructor() { }

  getLocalSweets(){
    return "These are local sweets"
  }




}
