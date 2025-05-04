import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TipoDireccionPIUuTipoDireccionComponent } from './piu_tipodireccion.component';

const routes: Routes = [
    { path: 'piu_tipodireccion' , component: TipoDireccionPIUuTipoDireccionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDireccionRoutingModule { }
