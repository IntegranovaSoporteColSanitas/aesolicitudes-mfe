import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GlobalServicesRoutingModule } from './globalservices-routing.module';
import { GSSIUuTGSELECCONTRATOASOCComponent } from './siu_tgseleccontratoasoc.component';
import { GSSIUuTGSELECCONTRATOASOCTITComponent } from './siu_tgseleccontratoasoctit.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GlobalServicesRoutingModule
  ],
  declarations: [
    GSSIUuTGSELECCONTRATOASOCComponent,
    GSSIUuTGSELECCONTRATOASOCTITComponent
  ],
  exports: [
    GSSIUuTGSELECCONTRATOASOCComponent,
    GSSIUuTGSELECCONTRATOASOCTITComponent
  ]
})
export class GlobalServicesModule { }
