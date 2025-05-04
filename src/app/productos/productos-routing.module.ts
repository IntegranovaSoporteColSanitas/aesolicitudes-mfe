import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ProductosPIUuProductoComponent } from './piu_producto.component';
import { ProductosPIUuProductosuObsComponent } from './piu_productos_obs.component';

const routes: Routes = [
    { path: 'piu_producto' , component: ProductosPIUuProductoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_productos_obs' , component: ProductosPIUuProductosuObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
