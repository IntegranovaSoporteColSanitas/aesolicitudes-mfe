import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GSSIUuTGSELECCONTRATOASOCComponent } from './siu_tgseleccontratoasoc.component';
import { GSSIUuTGSELECCONTRATOASOCTITComponent } from './siu_tgseleccontratoasoctit.component';

const routes: Routes = [
    { path: 'siu_tgseleccontratoasoc' , component: GSSIUuTGSELECCONTRATOASOCComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgseleccontratoasoctit' , component: GSSIUuTGSELECCONTRATOASOCTITComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalServicesRoutingModule { }
