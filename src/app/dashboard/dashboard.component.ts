import { Component, OnInit } from '@angular/core';
import { FetchService } from '../service/fetch.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todo: string;
  constructor(private fetch: FetchService,private toastr: ToastrService) {
  }
  result: any;
  ngOnInit(): void {
    this.fetch.get().subscribe((result) => {
      this.result = result
    })
  }
  submit() {
    const todo = {
      title: this.todo,
      completed: false
    }
    this.fetch.posts(todo).subscribe((todo) => {
      this.result.push(todo)
      this.toastr.success('Ready!','Your Task Time Start Now');

    })
  }
  deleteTodo(todo) {
    console.log(todo);
    this.result = this.result.filter(t => t.id !== todo.id)
    this.fetch.delete(todo).subscribe((res)=>{
      this.toastr.error('Deleted!','Task Deleted');
    });
  }


}
