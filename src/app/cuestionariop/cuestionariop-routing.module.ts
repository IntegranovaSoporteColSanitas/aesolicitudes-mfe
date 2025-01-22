import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { CuestionarioPIIUuCuestionarioComponent } from './iiu_cuestionario.component';
import { CuestionarioPPIUuCuestionarioPuNullComponent } from './piu_cuestionariop_null.component';

const routes: Routes = [
    { path: 'iiu_cuestionario' , component: CuestionarioPIIUuCuestionarioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_cuestionariop_null' , component: CuestionarioPPIUuCuestionarioPuNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuestionarioPRoutingModule { }
