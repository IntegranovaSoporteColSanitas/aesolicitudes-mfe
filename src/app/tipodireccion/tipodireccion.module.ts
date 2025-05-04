import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoDireccionRoutingModule } from './tipodireccion-routing.module';
import { TipoDireccionPIUuTipoDireccionComponent } from './piu_tipodireccion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoDireccionRoutingModule
  ],
  declarations: [
    TipoDireccionPIUuTipoDireccionComponent
  ],
  exports: [
    TipoDireccionPIUuTipoDireccionComponent
  ]
})
export class TipoDireccionModule { }
