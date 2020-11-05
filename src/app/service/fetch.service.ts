import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
todo:any="https://jsonplaceholder.typicode.com/todos";
  constructor(public http:HttpClient) { }

  post(uri:string,payload):Observable<any>{
  	return this.http.post(`${environment.Root_url}/${uri}`,payload);
  }
  posts(todos):Observable<any>{
  	return this.http.post(`${this.todo}`,todos);
  }
  get():Observable<any>{
    return this.http.get(`${this.todo}?_limit=5`);
  }
  // toggleCompleted
  onCompleted(todo){
    return this.http.put(`${this.todo}/${todo.id}`,todo)
  }
  delete(todo):Observable<any>{
    return this.http.delete(`${this.todo}/${todo.id}`);

  }
}
