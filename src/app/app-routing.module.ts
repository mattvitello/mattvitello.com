import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { PhotoComponent } from './photo/photo.component';
import { ContactComponent } from './contact/contact.component';
import { WhatisthisComponent } from './whatisthis/whatisthis.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'whatisthis', component: WhatisthisComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
