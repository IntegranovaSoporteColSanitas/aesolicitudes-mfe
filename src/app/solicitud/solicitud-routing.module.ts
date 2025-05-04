import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
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

const routes: Routes = [
    { path: 'siu_anotarobservaciones' , component: SolicitudSIUuanotarObservacionesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_dummy_redirigir' , component: SolicitudSIUudummyuRedirigirComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_dummy_generarsolicitud' , component: SolicitudSIUudummyuGenerarSolicitudComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modmarcacarnet' , component: SolicitudSIUumodMarcaCarnetComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificarinfopago' , component: SolicitudSIUuTMODIFICARINFOPAGOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearomodfirma' , component: SolicitudSIUuTCREAROMODFIRMAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tindicarcontratante2' , component: SolicitudSIUuTINDICARCONTRATANTE2Component,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tindicartitular2' , component: SolicitudSIUuTINDICARTITULAR2Component,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tchgtitbenefcont' , component: SolicitudSIUuTCHGTITBENEFCONTComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodencabezado' , component: SolicitudSIUuTMODENCABEZADOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmoddirscontratante' , component: SolicitudSIUuTMODDIRSCONTRATANTEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmoddirstitular' , component: SolicitudSIUuTMODDIRSTITULARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodencabezadoincl' , component: SolicitudSIUuTMODENCABEZADOINCLComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearomodfirmacontinc' , component: SolicitudSIUuTCREAROMODFIRMACONTINCComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tsubirdocumentoato' , component: SolicitudSIUuTSUBIRDOCUMENTOATOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_nuevaafiliacion' , component: SolicitudMDIUuNuevaAfiliacionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'imdiu_infocontratantepr' , component: SolicitudIMDIUuInfoContratantePRComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'imdiu_infocontratanteincl' , component: SolicitudIMDIUuInfoContratanteINCLComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_usuariosincl' , component: SolicitudMDIUuUsuariosINCLComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'imdiu_infocontratanteinccolect' , component: SolicitudIMDIUuInfoContratanteINCColectComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'imdiu_infocontratanteprcol' , component: SolicitudIMDIUuInfoContratantePRCOLComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_inclusioncolectivo' , component: SolicitudMDIUuInclusionColectivoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_inclusionfamiliar' , component: SolicitudMDIUuInclusionFamiliarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_radicados_obs' , component: SolicitudPIUuRadicadosuObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_consultarradicado' , component: SolicitudPIUuConsultarRadicadoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
