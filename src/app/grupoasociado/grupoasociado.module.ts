import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GrupoAsociadoRoutingModule } from './grupoasociado-routing.module';
import { GrupoAsociadoPIUuGrupoAsociadoComponent } from './piu_grupoasociado.component';
import { GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent } from './piu_grupoasociadobusqueda.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GrupoAsociadoRoutingModule
  ],
  declarations: [
    GrupoAsociadoPIUuGrupoAsociadoComponent,
    GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent
  ],
  exports: [
    GrupoAsociadoPIUuGrupoAsociadoComponent,
    GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent
  ]
})
export class GrupoAsociadoModule { }
