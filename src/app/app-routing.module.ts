import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChaudiereComponent } from './chaudiere/chaudiere.component';
import { ListChaudiereComponent } from './list-chaudiere/list-chaudiere.component';
import { ListInterventionComponent } from './list-intervention/list-intervention.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chaudieres',
    component: ListChaudiereComponent
  },
  {
    path: 'chaudiere/:id',
    component: ChaudiereComponent
  },
  {
    path: 'interventions',
    component: ListInterventionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
