import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EstadoPersonaPIUuEstadoPersonaComponent } from './piu_estadopersona.component';

const routes: Routes = [
    { path: 'piu_estadopersona' , component: EstadoPersonaPIUuEstadoPersonaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoPersonaRoutingModule { }
