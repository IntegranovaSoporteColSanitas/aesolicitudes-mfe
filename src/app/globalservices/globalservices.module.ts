import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GlobalServicesRoutingModule } from './globalservices-routing.module';
import { GSSIUuTGSELECCONTRATOASOCComponent } from './siu_tgseleccontratoasoc.component';
import { GSSIUuTGSELECCONTRATOASOCTITComponent } from './siu_tgseleccontratoasoctit.component';
import { GSSIUuOGENERARSOLICITUD2Component } from './siu_ogenerarsolicitud2.component';
import { GSSIUuOGENERARSOLICITUD2uOutComponent } from './siu_ogenerarsolicitud2_out.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GlobalServicesRoutingModule
  ],
  declarations: [
    GSSIUuTGSELECCONTRATOASOCComponent,
    GSSIUuTGSELECCONTRATOASOCTITComponent,
    GSSIUuOGENERARSOLICITUD2Component,
    GSSIUuOGENERARSOLICITUD2uOutComponent
  ],
  exports: [
    GSSIUuTGSELECCONTRATOASOCComponent,
    GSSIUuTGSELECCONTRATOASOCTITComponent,
    GSSIUuOGENERARSOLICITUD2Component,
    GSSIUuOGENERARSOLICITUD2uOutComponent
  ]
})
export class GlobalServicesModule { }
