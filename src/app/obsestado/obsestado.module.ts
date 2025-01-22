import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ObsEstadoRoutingModule } from './obsestado-routing.module';
import { ObsEstadoSIUumodificarComponent } from './siu_modificar.component';
import { ObsEstadoPIUuObsEstadouNullComponent } from './piu_obsestado_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ObsEstadoRoutingModule
  ],
  declarations: [
    ObsEstadoSIUumodificarComponent,
    ObsEstadoPIUuObsEstadouNullComponent
  ],
  exports: [
    ObsEstadoSIUumodificarComponent,
    ObsEstadoPIUuObsEstadouNullComponent
  ]
})
export class ObsEstadoModule { }
