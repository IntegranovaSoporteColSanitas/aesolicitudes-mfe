import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GrupoAsociadoSIUumodificarComponent } from './siu_modificar.component';
import { GrupoAsociadoPIUuGrupoAsociadoComponent } from './piu_grupoasociado.component';
import { GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent } from './piu_grupoasociadobusqueda.component';

const routes: Routes = [
    { path: 'siu_modificar' , component: GrupoAsociadoSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_grupoasociado' , component: GrupoAsociadoPIUuGrupoAsociadoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_grupoasociadobusqueda' , component: GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoAsociadoRoutingModule { }
