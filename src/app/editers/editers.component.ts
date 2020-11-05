import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from '../service/fetch.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editers',
  templateUrl: './editers.component.html',
  styleUrls: ['./editers.component.css']
})
export class EditersComponent implements OnInit {
  @Input() todos: any;
  @Output() DeleteTodos: EventEmitter<any> = new EventEmitter;
  constructor(private fetch: FetchService, private toastr: ToastrService) { }
  result: [];
  ngOnInit(): void {
    this.fetch.get().subscribe((result) => {
      this.result = result
    })
  }
  check: any;
  myClass: any = {
    isCompleted: false
  };
  setClass() {
    let classes = {
      'isCompleted': this.todos.completed
    }
    return classes
    console.log(classes);
  }

  onToggle(todos) {
    // for toggle
    todos.completed = !todos.completed
    // send response

    this.fetch.onCompleted(todos).subscribe((res) => {
      console.log(res);
      this.toastr.success('Great!', 'Task Completed');

    })
  }
  onDelete(todos) {
    this.DeleteTodos.emit(todos)
  }



}
