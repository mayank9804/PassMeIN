import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserLoginGuard } from '../core/guards/login-guard/user-login.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardResolverService } from '../core/services/cards/card.resolver.service';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[UserLoginGuard],
    children:[
      {
        path:'',
        component:CardsComponent,
        resolve : {cards:CardResolverService}
      },
      {
        path:'profile',
        component:ProfileComponent
      },{
        path:'getting-started',
        component:GettingStartedComponent
      },{
        path:'settings',
        component:SettingsComponent
      },{
        path:'contactus',
        component:ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
