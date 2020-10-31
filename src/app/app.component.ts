import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myclas:any="border box";
  // true
  // false
// class binding
  // flag="form-control w-50 m-auto border border-top-0";
  color="red";

flag=false;
//event binding
nm:string="";
upload(osaf){
	console.log(osaf)
	this.nm=osaf;
}
onpres(event:any){

}

i = 20;
sizer: any;
setFont(font) {
  if (font == 'inc') {
    this.i++;
  }
  else {
    this.i--;
  }

}
bgColor:any;
setBg(event){
  this.bgColor=event.target.value;
}
}
