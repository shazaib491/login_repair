import { Component, OnInit } from '@angular/core';
import {Student} from '../student'
@Component({
  selector: 'app-osaf',
  templateUrl: './osaf.component.html',
  styleUrls: ['./osaf.component.css']
})
export class OsafComponent implements OnInit {
  // store: any;
  // i = 5;
  constructor() { }

  ngOnInit(): void {
  }

  // ngModel  instance formControl
   // ngForm track object
   // (click) (onSubmit)
setData(value){
  console.log(value);
}
data="data submitted";
}
