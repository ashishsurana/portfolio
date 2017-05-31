import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SkillComponent } from './skills/skill.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './projects/project.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const ROUTES: Routes = [
    { path : '', component : AboutComponent },
    { path : 'about', component: AboutComponent },
    { path : 'skills', component: SkillComponent },
    { path : 'projects', component: ProjectComponent },
    { path : 'resume', component: ResumeComponent },
    { path : 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
     AboutComponent, SkillComponent, ProjectComponent, ResumeComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
