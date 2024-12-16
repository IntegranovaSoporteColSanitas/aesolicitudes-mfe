import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ProteccionDatosSIUuTCREARPROTECCIONDATOSNAComponent } from './siu_tcrearprotecciondatosna.component';
import { ProteccionDatosPIUuProteccionDatosuNullComponent } from './piu_protecciondatos_null.component';

const routes: Routes = [
    { path: 'siu_tcrearprotecciondatosna' , component: ProteccionDatosSIUuTCREARPROTECCIONDATOSNAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_protecciondatos_null' , component: ProteccionDatosPIUuProteccionDatosuNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProteccionDatosRoutingModule { }
