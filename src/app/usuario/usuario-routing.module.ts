import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { UsuarioSIUushowCuesMedicoComponent } from './siu_showcuesmedico.component';
import { UsuarioSIUuTMODIFICARATTRComponent } from './siu_tmodificarattr.component';
import { UsuarioSIUuTMODUSUARIOComponent } from './siu_tmodusuario.component';
import { UsuarioSIUuTCREAROMODANEXOMATComponent } from './siu_tcrearomodanexomat.component';
import { UsuarioSIUuTCREAROMODANEXONEOComponent } from './siu_tcrearomodanexoneo.component';
import { UsuarioPIUuUsuariouNullComponent } from './piu_usuario_null.component';

const routes: Routes = [
    { path: 'siu_showcuesmedico' , component: UsuarioSIUushowCuesMedicoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificarattr' , component: UsuarioSIUuTMODIFICARATTRComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodusuario' , component: UsuarioSIUuTMODUSUARIOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearomodanexomat' , component: UsuarioSIUuTCREAROMODANEXOMATComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearomodanexoneo' , component: UsuarioSIUuTCREAROMODANEXONEOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_usuario_null' , component: UsuarioPIUuUsuariouNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
