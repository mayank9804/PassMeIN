import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroLoginGuard } from './guards/login-guard/hero-login.guard';
import { AuthService } from './services/auth/auth.service';
import { UserLoginGuard } from './guards/login-guard/user-login.guard';
import { FakedataService } from './services/fakedata/fakedata.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth.interceptor';
import { CardService } from './services/cards/card.service';
import { CardResolverService } from './services/cards/card.resolver.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    HeroLoginGuard,
    AuthService,
    CardService,
    CardResolverService,
    UserLoginGuard,
    FakedataService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }
  ]
})
export class CoreModule { }
