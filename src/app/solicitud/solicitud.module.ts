import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudSIUuanotarObservacionesComponent } from './siu_anotarobservaciones.component';
import { SolicitudSIUudummyuRedirigirComponent } from './siu_dummy_redirigir.component';
import { SolicitudSIUudummyuGenerarSolicitudComponent } from './siu_dummy_generarsolicitud.component';
import { SolicitudSIUumodMarcaCarnetComponent } from './siu_modmarcacarnet.component';
import { SolicitudSIUuTMODIFICARINFOPAGOComponent } from './siu_tmodificarinfopago.component';
import { SolicitudSIUuTCREAROMODFIRMAComponent } from './siu_tcrearomodfirma.component';
import { SolicitudSIUuTINDICARCONTRATANTE2Component } from './siu_tindicarcontratante2.component';
import { SolicitudSIUuTINDICARTITULAR2Component } from './siu_tindicartitular2.component';
import { SolicitudSIUuTCHGTITBENEFCONTComponent } from './siu_tchgtitbenefcont.component';
import { SolicitudSIUuTMODENCABEZADOComponent } from './siu_tmodencabezado.component';
import { SolicitudSIUuTMODDIRSCONTRATANTEComponent } from './siu_tmoddirscontratante.component';
import { SolicitudSIUuTMODDIRSTITULARComponent } from './siu_tmoddirstitular.component';
import { SolicitudSIUuTMODENCABEZADOINCLComponent } from './siu_tmodencabezadoincl.component';
import { SolicitudSIUuTCREAROMODFIRMACONTINCComponent } from './siu_tcrearomodfirmacontinc.component';
import { SolicitudSIUuTSUBIRDOCUMENTOATOComponent } from './siu_tsubirdocumentoato.component';
import { SolicitudMDIUuNuevaAfiliacionComponent } from './mdiu_nuevaafiliacion.component';
import { SolicitudIMDIUuInfoContratantePRComponent } from './imdiu_infocontratantepr.component';
import { SolicitudIMDIUuInfoContratanteINCLComponent } from './imdiu_infocontratanteincl.component';
import { SolicitudMDIUuUsuariosINCLComponent } from './mdiu_usuariosincl.component';
import { SolicitudIMDIUuInfoContratanteINCColectComponent } from './imdiu_infocontratanteinccolect.component';
import { SolicitudIMDIUuInfoContratantePRCOLComponent } from './imdiu_infocontratanteprcol.component';
import { SolicitudMDIUuInclusionColectivoComponent } from './mdiu_inclusioncolectivo.component';
import { SolicitudMDIUuInclusionFamiliarComponent } from './mdiu_inclusionfamiliar.component';
import { SolicitudPIUuRadicadosuObsComponent } from './piu_radicados_obs.component';
import { SolicitudPIUuConsultarRadicadoComponent } from './piu_consultarradicado.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SolicitudRoutingModule
  ],
  declarations: [
    SolicitudSIUuanotarObservacionesComponent,
    SolicitudSIUudummyuRedirigirComponent,
    SolicitudSIUudummyuGenerarSolicitudComponent,
    SolicitudSIUumodMarcaCarnetComponent,
    SolicitudSIUuTMODIFICARINFOPAGOComponent,
    SolicitudSIUuTCREAROMODFIRMAComponent,
    SolicitudSIUuTINDICARCONTRATANTE2Component,
    SolicitudSIUuTINDICARTITULAR2Component,
    SolicitudSIUuTCHGTITBENEFCONTComponent,
    SolicitudSIUuTMODENCABEZADOComponent,
    SolicitudSIUuTMODDIRSCONTRATANTEComponent,
    SolicitudSIUuTMODDIRSTITULARComponent,
    SolicitudSIUuTMODENCABEZADOINCLComponent,
    SolicitudSIUuTCREAROMODFIRMACONTINCComponent,
    SolicitudSIUuTSUBIRDOCUMENTOATOComponent,
    SolicitudMDIUuNuevaAfiliacionComponent,
    SolicitudIMDIUuInfoContratantePRComponent,
    SolicitudIMDIUuInfoContratanteINCLComponent,
    SolicitudMDIUuUsuariosINCLComponent,
    SolicitudIMDIUuInfoContratanteINCColectComponent,
    SolicitudIMDIUuInfoContratantePRCOLComponent,
    SolicitudMDIUuInclusionColectivoComponent,
    SolicitudMDIUuInclusionFamiliarComponent,
    SolicitudPIUuRadicadosuObsComponent,
    SolicitudPIUuConsultarRadicadoComponent
  ],
  exports: [
    SolicitudSIUuanotarObservacionesComponent,
    SolicitudSIUudummyuRedirigirComponent,
    SolicitudSIUudummyuGenerarSolicitudComponent,
    SolicitudSIUumodMarcaCarnetComponent,
    SolicitudSIUuTMODIFICARINFOPAGOComponent,
    SolicitudSIUuTCREAROMODFIRMAComponent,
    SolicitudSIUuTINDICARCONTRATANTE2Component,
    SolicitudSIUuTINDICARTITULAR2Component,
    SolicitudSIUuTCHGTITBENEFCONTComponent,
    SolicitudSIUuTMODENCABEZADOComponent,
    SolicitudSIUuTMODDIRSCONTRATANTEComponent,
    SolicitudSIUuTMODDIRSTITULARComponent,
    SolicitudSIUuTMODENCABEZADOINCLComponent,
    SolicitudSIUuTCREAROMODFIRMACONTINCComponent,
    SolicitudSIUuTSUBIRDOCUMENTOATOComponent,
    SolicitudMDIUuNuevaAfiliacionComponent,
    SolicitudIMDIUuInfoContratantePRComponent,
    SolicitudIMDIUuInfoContratanteINCLComponent,
    SolicitudMDIUuUsuariosINCLComponent,
    SolicitudIMDIUuInfoContratanteINCColectComponent,
    SolicitudIMDIUuInfoContratantePRCOLComponent,
    SolicitudMDIUuInclusionColectivoComponent,
    SolicitudMDIUuInclusionFamiliarComponent,
    SolicitudPIUuRadicadosuObsComponent,
    SolicitudPIUuConsultarRadicadoComponent
  ]
})
export class SolicitudModule { }
