import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CuestionarioPRoutingModule } from './cuestionariop-routing.module';
import { CuestionarioPIIUuCuestionarioComponent } from './iiu_cuestionario.component';
import { CuestionarioPPIUuCuestionarioPuNullComponent } from './piu_cuestionariop_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CuestionarioPRoutingModule
  ],
  declarations: [
    CuestionarioPIIUuCuestionarioComponent,
    CuestionarioPPIUuCuestionarioPuNullComponent
  ],
  exports: [
    CuestionarioPIIUuCuestionarioComponent,
    CuestionarioPPIUuCuestionarioPuNullComponent
  ]
})
export class CuestionarioPModule { }
