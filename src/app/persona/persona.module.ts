import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaSIUuTADDUSUARIOASOLComponent } from './siu_taddusuarioasol.component';
import { PersonaSIUuTELIMINARComponent } from './siu_teliminar.component';
import { PersonaPIUuPersonaComponent } from './piu_persona.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PersonaRoutingModule
  ],
  declarations: [
    PersonaSIUuTADDUSUARIOASOLComponent,
    PersonaSIUuTELIMINARComponent,
    PersonaPIUuPersonaComponent
  ],
  exports: [
    PersonaSIUuTADDUSUARIOASOLComponent,
    PersonaSIUuTELIMINARComponent,
    PersonaPIUuPersonaComponent
  ]
})
export class PersonaModule { }
