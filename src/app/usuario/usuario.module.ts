import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioSIUushowCuesMedicoComponent } from './siu_showcuesmedico.component';
import { UsuarioSIUuTMODIFICARATTRComponent } from './siu_tmodificarattr.component';
import { UsuarioSIUuTMODUSUARIOComponent } from './siu_tmodusuario.component';
import { UsuarioSIUuTCREAROMODANEXOMATComponent } from './siu_tcrearomodanexomat.component';
import { UsuarioSIUuTCREAROMODANEXONEOComponent } from './siu_tcrearomodanexoneo.component';
import { UsuarioPIUuUsuariouNullComponent } from './piu_usuario_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    UsuarioRoutingModule
  ],
  declarations: [
    UsuarioSIUushowCuesMedicoComponent,
    UsuarioSIUuTMODIFICARATTRComponent,
    UsuarioSIUuTMODUSUARIOComponent,
    UsuarioSIUuTCREAROMODANEXOMATComponent,
    UsuarioSIUuTCREAROMODANEXONEOComponent,
    UsuarioPIUuUsuariouNullComponent
  ],
  exports: [
    UsuarioSIUushowCuesMedicoComponent,
    UsuarioSIUuTMODIFICARATTRComponent,
    UsuarioSIUuTMODUSUARIOComponent,
    UsuarioSIUuTCREAROMODANEXOMATComponent,
    UsuarioSIUuTCREAROMODANEXONEOComponent,
    UsuarioPIUuUsuariouNullComponent
  ]
})
export class UsuarioModule { }
