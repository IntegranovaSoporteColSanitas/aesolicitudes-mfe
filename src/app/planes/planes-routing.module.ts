import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PlanesPIUuPlanComponent } from './piu_plan.component';
import { PlanesPIUuPlanesuObsComponent } from './piu_planes_obs.component';

const routes: Routes = [
    { path: 'piu_plan' , component: PlanesPIUuPlanComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_planes_obs' , component: PlanesPIUuPlanesuObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
