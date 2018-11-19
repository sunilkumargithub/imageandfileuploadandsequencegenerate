import { Component, OnInit } from '@angular/core';
import {UUID} from 'angular2-uuid';
@Component({
  selector: 'app-sequencegenerate',
  templateUrl: './sequencegenerate.component.html',
  styleUrls: ['./sequencegenerate.component.css']
})
export class SequencegenerateComponent implements OnInit {
startnumber = 10010000;

nextnumber: number;
uuidvalue: string;
datenumber: number;
  constructor() { }

  ngOnInit() {
  }




  generatenewnumber() {
  const a =  this.startnumber + 100;
  this.nextnumber = a;
  this.startnumber = this.nextnumber;
  console.log('nextnumber' , this.nextnumber);
  }



   uniqueNumber() {

  const  date = Date.now();
console.log('datenow', date);
this.datenumber = date;
//     if (date <= uniqueNumber) {
//         date = uniqueNumber++;
//     } else {
//         uniqueNumber = date;
//     }

//     return date;
// }

//  uniqueNumber.previous = 0;
   }
ID() {
  return this.uniqueNumber();
}



getuuid() {
  this.generateuuid();
  console.log('uuid is' , this.uuidvalue);
}

generateuuid() {
this.uuidvalue = UUID.UUID();
return this.uuidvalue;
}





   }
