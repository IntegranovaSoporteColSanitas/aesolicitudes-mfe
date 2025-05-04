import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalForIUComponent } from './modalforiu.component';
import { DialogModule } from 'primeng/dialog';
import { CommonComponentsModule } from '../../commoncomponents.module';
import { SolicitudModule } from '../../solicitud/solicitud.module';
import { GlobalServicesModule } from '../../globalservices/globalservices.module';
import { UsuarioModule } from '../../usuario/usuario.module';
import { PersonaModule } from '../../persona/persona.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DialogModule,
    SolicitudModule,
    GlobalServicesModule,
    UsuarioModule,
    PersonaModule
  ],
  declarations: [
    ModalForIUComponent
  ],
  exports: [ModalForIUComponent]
})
export class ModalForIUModule { }
