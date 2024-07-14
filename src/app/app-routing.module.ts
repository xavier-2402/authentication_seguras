import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

const routes: Routes = [
  {pathMatch:'full', redirectTo:'home',path:''},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'confirm/:customerId',component:ConfirmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
