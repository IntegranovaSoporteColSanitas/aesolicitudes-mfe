import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ProteccionDatosRoutingModule } from './protecciondatos-routing.module';
import { ProteccionDatosSIUuTCREARPROTECCIONDATOSNAComponent } from './siu_tcrearprotecciondatosna.component';
import { ProteccionDatosSIUuTCREARPROTECCIONDATOSINCComponent } from './siu_tcrearprotecciondatosinc.component';
import { ProteccionDatosPIUuProteccionDatosuNullComponent } from './piu_protecciondatos_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProteccionDatosRoutingModule
  ],
  declarations: [
    ProteccionDatosSIUuTCREARPROTECCIONDATOSNAComponent,
    ProteccionDatosSIUuTCREARPROTECCIONDATOSINCComponent,
    ProteccionDatosPIUuProteccionDatosuNullComponent
  ],
  exports: [
    ProteccionDatosSIUuTCREARPROTECCIONDATOSNAComponent,
    ProteccionDatosSIUuTCREARPROTECCIONDATOSINCComponent,
    ProteccionDatosPIUuProteccionDatosuNullComponent
  ]
})
export class ProteccionDatosModule { }
