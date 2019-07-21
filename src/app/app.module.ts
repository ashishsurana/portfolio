import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './projects/project.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const ROUTES: any = [
    { path : '', component : AboutComponent },
    { path : 'about', component: AboutComponent },
    { path : 'projects', component: ProjectComponent },
    { path : 'resume', component: ResumeComponent },
    { path : 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
     AboutComponent, ProjectComponent, ResumeComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
