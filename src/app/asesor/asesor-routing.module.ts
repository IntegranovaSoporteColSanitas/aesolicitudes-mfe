import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AsesorPIUuDirectoresuObsComponent } from './piu_directores_obs.component';

const routes: Routes = [
    { path: 'piu_directores_obs' , component: AsesorPIUuDirectoresuObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
