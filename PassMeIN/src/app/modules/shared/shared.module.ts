import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideDockComponent } from './side-dock/side-dock.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SideDockComponent, NavbarComponent],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],exports:[
    SideDockComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
