import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { IcsetComponent } from './components/icset/icset.component';
import { PaperPresentationComponent } from './components/paper-presentation/paper-presentation.component';

import { TechathlonComponent } from './components/techathlon/techathlon.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
 
  {
    path: 'events',
    component: EventsComponent,
    
  },
  {
    path: 'events/icset',
    component: IcsetComponent,
    
  },
  {
    path: 'events/techathlon',
    component:TechathlonComponent,
    
  },
  {
    path: 'events/paper_presentation',
    component:PaperPresentationComponent,
    
  },
  
 
 
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
