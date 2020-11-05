import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {
@Input() item:any;
@Output() Delete:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }
  setClass(){
    const classes={
      'isCompleted':this.item.completed
    }
    return classes
  }
  onToggle(todo){
    todo.completed=!todo.completed
    // this.todo
  }

  onDelete(todos){
    this.Delete.emit(todos)
  }


}
