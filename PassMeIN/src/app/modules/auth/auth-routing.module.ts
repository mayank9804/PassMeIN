import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroLoginGuard } from '../core/guards/login-guard/hero-login.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'login',
    canActivate:[HeroLoginGuard],
    component:LoginComponent
  },{
    path:'register',
    canActivate:[HeroLoginGuard],
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
