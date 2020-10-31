import { Component, OnInit } from '@angular/core';

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
  // setValue(event) {
  //   const val = event.target.value;
  //   this.store = val;
  // }
  // setFont(operation) {
  //   if (operation == 'inc') {
  //     this.i = this.i + 1;
  //   }
  //   else if (operation == 'dec') {
  //     this.i = this.i - 1;
  //   }
  // }
//   color: any;
//   setColor(param) {
//     console.log(param.target.value)
//     this.color = param.target.value;
//   }
//   record = {
//     name:"",
//     stno:"",
//     company:"",
//     salary:""
//   }
// val:any;
//   sendData(event){
//     const keyname=event.target.name;
//      this.val=event.target.value;
//      this.record[keyname]=this.val;
//
//     }



// isSubmitted=false;
//   submit(){
//     this.isSubmitted=true
//
//     console.log(this.record)
//
// }
//
//   submits(){
//     this.isSubmitted=!this.isSubmitted;
//
//     this.record = {
//       name:"",
//       stno:"",
//       company:"",
//       salary:""
//     }
//   }
// isDone:boolean=false
//   submitss(){
//     this.isDone=!this.isDone;
//
  // }
  mystyles={
    width:"100px",
    height:"100px",
    color:"white",
    background:"red",
    border:"1px solid red"
  }

  setColor(event){
    const color=event.target.value
    this.mystyles['background']=color
  }

  myClass={
    border:true,
    "text-primary":true,
    "bg-danger":true
  }
// setClass(){
//   this.myClass['text-primary']=!this.myClass['text-primary']
// }

myclass={
  "bg-danger":true
}
isChecked=true
SetLike(){

  this.isChecked=!this.isChecked
  // oppsite true
  this.myclass['bg-danger']=!this.myclass['bg-danger']
  // oppsite true
  this.myclass['text-dark']=!this.myclass['text-dark']
}
myobj={
  "fa fa-thumbs-o-up":true
}
setClss(){
  this.myobj['fa fa-thumbs-o-up']=!this.myobj['fa fa-thumbs-o-up']

}


}
