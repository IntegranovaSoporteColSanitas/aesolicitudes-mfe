import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudPIUuConsultarRadicadoComponent } from './piu_consultarradicado.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SolicitudRoutingModule
  ],
  declarations: [
    SolicitudPIUuConsultarRadicadoComponent
  ],
  exports: [
    SolicitudPIUuConsultarRadicadoComponent
  ]
})
export class SolicitudModule { }
