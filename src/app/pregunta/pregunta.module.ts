import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PreguntaRoutingModule } from './pregunta-routing.module';
import { PreguntaPIUuPreguntaComponent } from './piu_pregunta.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PreguntaRoutingModule
  ],
  declarations: [
    PreguntaPIUuPreguntaComponent
  ],
  exports: [
    PreguntaPIUuPreguntaComponent
  ]
})
export class PreguntaModule { }
