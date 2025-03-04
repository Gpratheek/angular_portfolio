import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

{
  path:"",
 redirectTo:"/home",
 pathMatch:"full"
},
{
  path:"about",
  component:AboutComponent
},
{
  path:"contact",
  component:ContactComponent
},
{
path:"education",
component:EducationComponent
},
{
  path:"projects",
  component:ProjectsComponent
},
{
  path:"home",
component:HomeComponent
}
,
{

  path:"**",
  component:PagenotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
