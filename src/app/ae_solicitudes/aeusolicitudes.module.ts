import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AeusolicitudesRoutingModule } from './aeusolicitudes-routing.module';
import { AeusolicitudesSIUuTNUEVAAFILIACIONComponent } from './siu_tnuevaafiliacion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AeusolicitudesRoutingModule
  ],
  declarations: [
    AeusolicitudesSIUuTNUEVAAFILIACIONComponent
  ],
  exports: [
    AeusolicitudesSIUuTNUEVAAFILIACIONComponent
  ]
})
export class AeusolicitudesModule { }
