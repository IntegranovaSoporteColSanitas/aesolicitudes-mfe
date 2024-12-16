import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ProteccionDatosRoutingModule } from './protecciondatos-routing.module';
import { ProteccionDatosSIUuTCREARPROTECCIONDATOSNAComponent } from './siu_tcrearprotecciondatosna.component';
import { ProteccionDatosPIUuProteccionDatosuNullComponent } from './piu_protecciondatos_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProteccionDatosRoutingModule
  ],
  declarations: [
    ProteccionDatosSIUuTCREARPROTECCIONDATOSNAComponent,
    ProteccionDatosPIUuProteccionDatosuNullComponent
  ],
  exports: [
    ProteccionDatosSIUuTCREARPROTECCIONDATOSNAComponent,
    ProteccionDatosPIUuProteccionDatosuNullComponent
  ]
})
export class ProteccionDatosModule { }
