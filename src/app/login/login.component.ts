import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import  {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private toastr: ToastrService,private router:Router,private fb:FormBuilder) { }
form:FormGroup
  ngOnInit(): void {
  	this.form=this.fb.group({
  		email:['',Validators.required],
  		password:['',Validators.required],
  	})
  }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

login(){
	this.auth.login(this.form.value).subscribe((result)=>{
		console.log(result)
		if(result.success){
			this.toastr.success('ThankYou!', result.success);
			this.router.navigate(['/dashboard'])
		}
		else if(result.error)
		{
			this.toastr.error('Error!',result.error,{
				  timeOut: 3000,
			});

		}
	})
}
}
