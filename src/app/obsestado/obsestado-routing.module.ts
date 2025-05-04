import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ObsEstadoSIUumodificarComponent } from './siu_modificar.component';
import { ObsEstadoPIUuObsEstadouNullComponent } from './piu_obsestado_null.component';

const routes: Routes = [
    { path: 'siu_modificar' , component: ObsEstadoSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_obsestado_null' , component: ObsEstadoPIUuObsEstadouNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObsEstadoRoutingModule { }
