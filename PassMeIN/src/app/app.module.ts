import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeroComponent } from './components/hero/hero.component';
import { CoreModule } from './modules/core/core.module';
import { DashboardModule } from './modules/password-dashboard/dashboard.module';
import { AuthModule } from './modules/auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    DashboardModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
