import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeroLoginGuard } from './modules/core/guards/login-guard/hero-login.guard';

const routes: Routes = [
  {
    path:'',
    component:HeroComponent,
    canActivate:[HeroLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
