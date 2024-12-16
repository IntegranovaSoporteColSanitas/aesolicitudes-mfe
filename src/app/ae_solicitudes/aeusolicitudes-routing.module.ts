import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AeusolicitudesSIUuTNUEVAAFILIACIONComponent } from './siu_tnuevaafiliacion.component';

const routes: Routes = [
    { path: 'siu_tnuevaafiliacion' , component: AeusolicitudesSIUuTNUEVAAFILIACIONComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AeusolicitudesRoutingModule { }
