import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
  	this.form=this.fb.group({
  		u_name:['',Validators.required],
  		email:['',Validators.required],
  		password:['',Validators.required],
  		cpassword:['',Validators.required]
  	})

  }
  get u_name() { return this.form.get('u_name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get cpassword() { return this.form.get('cpassword'); }

sendData(){
	console.log(this.form.value)
	this.auth.register(this.form.value).subscribe((result)=>{
		if(result.success){
			this.toastr.success('ThankYou!', result.success);
			this.router.navigate(['/login'])
		}
		else if(result.error)
		{
			this.toastr.error('Error!', result.error,{
				  timeOut: 3000,
			});

			console.log(result)
		}
	})

}

}
