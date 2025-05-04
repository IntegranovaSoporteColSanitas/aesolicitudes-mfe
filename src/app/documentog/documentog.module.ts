import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { DocumentoGRoutingModule } from './documentog-routing.module';
import { DocumentoGSIUuTAPROBARComponent } from './siu_taprobar.component';
import { DocumentoGSIUuTDEVOLVERComponent } from './siu_tdevolver.component';
import { DocumentoGMDIUuDocumentoGComponent } from './mdiu_documentog.component';
import { DocumentoGPIUuDocumentoGComponent } from './piu_documentog.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DocumentoGRoutingModule
  ],
  declarations: [
    DocumentoGSIUuTAPROBARComponent,
    DocumentoGSIUuTDEVOLVERComponent,
    DocumentoGMDIUuDocumentoGComponent,
    DocumentoGPIUuDocumentoGComponent
  ],
  exports: [
    DocumentoGSIUuTAPROBARComponent,
    DocumentoGSIUuTDEVOLVERComponent,
    DocumentoGMDIUuDocumentoGComponent,
    DocumentoGPIUuDocumentoGComponent
  ]
})
export class DocumentoGModule { }
