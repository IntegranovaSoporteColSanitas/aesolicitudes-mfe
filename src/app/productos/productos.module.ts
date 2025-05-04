import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosPIUuProductoComponent } from './piu_producto.component';
import { ProductosPIUuProductosuObsComponent } from './piu_productos_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProductosRoutingModule
  ],
  declarations: [
    ProductosPIUuProductoComponent,
    ProductosPIUuProductosuObsComponent
  ],
  exports: [
    ProductosPIUuProductoComponent,
    ProductosPIUuProductosuObsComponent
  ]
})
export class ProductosModule { }
