import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "signup", component: SignupComponent},
  {path: "test", component: TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
