import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { CardsComponent } from './cards/cards.component';
import { ProfileComponent } from './home/profile/profile.component';
import { KnowledgeComponent } from './home/knowledge/knowledge.component';
import { EducationsComponent } from './home/educations/educations.component';
import { WorksComponent } from './home/works/works.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    CardsComponent,
    ProfileComponent,
    KnowledgeComponent,
    EducationsComponent,
    WorksComponent,
    AboutmeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
