import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainPage } from './app.mainpage';
import { LoginComponent } from './login/login.component';
import { ConditionalNavigationComponent } from './common/conditionalNavigation.component';
import { ClassServiceLogComponent } from './common/classServiceLog.component';
import { NoAccessComponent } from './common/noAccess.component';
import { WrongVersionComponent } from './common/wrongVersion.component';
import { LoginGuard } from './common/loginGuard';
import { PopStateNavigationGuard } from './common/popStateNavigationGuard';
import { GenericSiuComponent } from './common/genericSiu.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    // full : makes sure the path is absolute path
    { path: environment.prefix + '', component: AppMainPage, pathMatch: 'full', canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/noaccess', component : NoAccessComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/wrongversion', component : WrongVersionComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/main', component: AppMainPage, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/login', component: LoginComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/genericsiu', component: GenericSiuComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/conditionalnavigation', component: ConditionalNavigationComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/classServiceLog', component: ClassServiceLogComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/asesor',
      loadChildren: () => import('./asesor/asesor.module').then(m => m.AsesorModule) },
    { path: environment.prefix + '/pregunta',
      loadChildren: () => import('./pregunta/pregunta.module').then(m => m.PreguntaModule) },
    { path: environment.prefix + '/productos',
      loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
    { path: environment.prefix + '/planes',
      loadChildren: () => import('./planes/planes.module').then(m => m.PlanesModule) },
    { path: environment.prefix + '/grupoasociado',
      loadChildren: () => import('./grupoasociado/grupoasociado.module').then(m => m.GrupoAsociadoModule) },
    { path: environment.prefix + '/persona',
      loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule) },
    { path: environment.prefix + '/tipodireccion',
      loadChildren: () => import('./tipodireccion/tipodireccion.module').then(m => m.TipoDireccionModule) },
    { path: environment.prefix + '/estadopersona',
      loadChildren: () => import('./estadopersona/estadopersona.module').then(m => m.EstadoPersonaModule) },
    { path: environment.prefix + '/ae_solicitudes',
      loadChildren: () => import('./ae_solicitudes/aeusolicitudes.module').then(m => m.AeusolicitudesModule) },
    { path: environment.prefix + '/solicitud',
      loadChildren: () => import('./solicitud/solicitud.module').then(m => m.SolicitudModule) },
    { path: environment.prefix + '/pais',
      loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule) },
    { path: environment.prefix + '/protecciondatos',
      loadChildren: () => import('./protecciondatos/protecciondatos.module').then(m => m.ProteccionDatosModule) },
    { path: environment.prefix + '/usuario',
      loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
    { path: environment.prefix + '/cuestionariop',
      loadChildren: () => import('./cuestionariop/cuestionariop.module').then(m => m.CuestionarioPModule) },
    { path: environment.prefix + '/documentog',
      loadChildren: () => import('./documentog/documentog.module').then(m => m.DocumentoGModule) },
    { path: environment.prefix + '/obsestado',
      loadChildren: () => import('./obsestado/obsestado.module').then(m => m.ObsEstadoModule) },
    { path: environment.prefix + '/globalservices',
      loadChildren: () => import('./globalservices/globalservices.module').then(m => m.GlobalServicesModule) },
    { path: '**', component: EmptyRouteComponent }

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' }
    ]
  })
export class AppRoutingModule { }
