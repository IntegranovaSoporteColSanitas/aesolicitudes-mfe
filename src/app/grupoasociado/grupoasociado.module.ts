import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GrupoAsociadoRoutingModule } from './grupoasociado-routing.module';
import { GrupoAsociadoSIUucrearComponent } from './siu_crear.component';
import { GrupoAsociadoSIUumodificarComponent } from './siu_modificar.component';
import { GrupoAsociadoPIUuGrupoAsociadoComponent } from './piu_grupoasociado.component';
import { GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent } from './piu_grupoasociadobusqueda.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GrupoAsociadoRoutingModule
  ],
  declarations: [
    GrupoAsociadoSIUucrearComponent,
    GrupoAsociadoSIUumodificarComponent,
    GrupoAsociadoPIUuGrupoAsociadoComponent,
    GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent
  ],
  exports: [
    GrupoAsociadoSIUucrearComponent,
    GrupoAsociadoSIUumodificarComponent,
    GrupoAsociadoPIUuGrupoAsociadoComponent,
    GrupoAsociadoPIUuGrupoAsociadoBusquedaComponent
  ]
})
export class GrupoAsociadoModule { }
