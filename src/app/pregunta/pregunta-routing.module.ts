import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PreguntaPIUuPreguntaComponent } from './piu_pregunta.component';

const routes: Routes = [
    { path: 'piu_pregunta' , component: PreguntaPIUuPreguntaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntaRoutingModule { }
