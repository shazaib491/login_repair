import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(public http:HttpClient) { }

  post(uri:string,payload):Observable<any>{
  	return this.http.post(`${environment.Root_url}/${uri}`,payload);
  }
}
