import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'skills', component:SkillsComponent},
  {path: 'cards', component:CardsComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
