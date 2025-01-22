import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorPIUuDirectoresuObsComponent } from './piu_directores_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AsesorRoutingModule
  ],
  declarations: [
    AsesorPIUuDirectoresuObsComponent
  ],
  exports: [
    AsesorPIUuDirectoresuObsComponent
  ]
})
export class AsesorModule { }
