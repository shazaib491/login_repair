import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editers',
  templateUrl: './editers.component.html',
  styleUrls: ['./editers.component.css']
})
export class EditersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //object
  information:any={
    name:'',
    email:'',
    company:'',
    salary:''
  }
//passing event in methods
setProperty(event){
  console.log(event.target)
  const nm=event.target.name;
  const val=event.target.value;
  this.information[nm]=val;
}

ishidden:boolean=false;
sendData(){
  // this.information['name']="shazaib";
  this.ishidden=true
  console.log(this.information)

}

AddData(){
  this.ishidden=false
  this.information='';

}



}
