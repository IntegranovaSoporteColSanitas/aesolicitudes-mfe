import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { DocumentoGSIUuTAPROBARComponent } from './siu_taprobar.component';
import { DocumentoGSIUuTDEVOLVERComponent } from './siu_tdevolver.component';
import { DocumentoGMDIUuDocumentoGComponent } from './mdiu_documentog.component';
import { DocumentoGPIUuDocumentoGComponent } from './piu_documentog.component';

const routes: Routes = [
    { path: 'siu_taprobar' , component: DocumentoGSIUuTAPROBARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tdevolver' , component: DocumentoGSIUuTDEVOLVERComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_documentog' , component: DocumentoGMDIUuDocumentoGComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_documentog' , component: DocumentoGPIUuDocumentoGComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoGRoutingModule { }
