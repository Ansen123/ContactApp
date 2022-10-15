import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import {HttpClientModule } from '@angular/common/http';
const AppRoutes:Routes=[
  {
    path:"",component:ContactViewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ContactViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
