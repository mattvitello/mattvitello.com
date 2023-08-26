import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotoComponent } from './photo/photo.component';
import { ContactComponent } from './contact/contact.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { WhatisthisComponent } from './whatisthis/whatisthis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    PhotoComponent,
    ContactComponent,
    WhatisthisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
