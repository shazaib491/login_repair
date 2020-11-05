import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OsafComponent } from './osaf/osaf.component';
import { EditersComponent } from './editers/editers.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { SetterComponent } from './setter/setter.component';


const routes: Routes = [
	{path:"osaf",component:OsafComponent},
	{path:"Login",component:LoginComponent},
	{path:"",component:DashboardComponent},
	{path:"register",component:RegisterComponent},
	{path:"editors",component:EditersComponent},
	{path:"newservice",component:NewServiceComponent},
	{path:"setter",component:SetterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
