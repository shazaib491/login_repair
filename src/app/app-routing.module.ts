import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OsafComponent } from './osaf/osaf.component';
import { EditersComponent } from './editers/editers.component';


const routes: Routes = [
	{path:"",component:OsafComponent},
	{path:"login",component:LoginComponent},
	{path:"dashboard",component:DashboardComponent},
	{path:"register",component:RegisterComponent},
	{path:"editors",component:EditersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
