import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EstadoPersonaRoutingModule } from './estadopersona-routing.module';
import { EstadoPersonaPIUuEstadoPersonaComponent } from './piu_estadopersona.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EstadoPersonaRoutingModule
  ],
  declarations: [
    EstadoPersonaPIUuEstadoPersonaComponent
  ],
  exports: [
    EstadoPersonaPIUuEstadoPersonaComponent
  ]
})
export class EstadoPersonaModule { }
