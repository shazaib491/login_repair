import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
@Injectable({
providedIn: 'root'
})
export class AuthService {
constructor(public fetch:FetchService) { }

register(payload){
return this.fetch.post('register',payload);
	}
	login(logInfo){
		console.log(logInfo)
return this.fetch.post('login',logInfo);
	}
}