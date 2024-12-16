import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PersonaSIUuTADDUSUARIOASOLComponent } from './siu_taddusuarioasol.component';
import { PersonaSIUuTELIMINARComponent } from './siu_teliminar.component';
import { PersonaPIUuPersonaComponent } from './piu_persona.component';

const routes: Routes = [
    { path: 'siu_taddusuarioasol' , component: PersonaSIUuTADDUSUARIOASOLComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_teliminar' , component: PersonaSIUuTELIMINARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_persona' , component: PersonaPIUuPersonaComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
