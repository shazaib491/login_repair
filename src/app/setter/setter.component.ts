import { Component, OnInit } from '@angular/core';
import { FetchService } from '../service/fetch.service';
import { Student } from '../student';

@Component({
  selector: 'app-setter',
  templateUrl: './setter.component.html',
  styleUrls: ['./setter.component.css']
})
export class SetterComponent implements OnInit {

  constructor(private fetch:FetchService) { }
  record:Student[];
  ngOnInit(): void {
    this.fetch.get().subscribe((data)=>{
      this.record=data
      console.log(this.record);
      
    })
  }

  onDelete(todos){
console.log(todos);
this.record=this.record.filter(t=>t.id!==todos.id)
this.fetch.delete(todos).subscribe()
  }
}
