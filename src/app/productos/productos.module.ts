import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosPIUuProductoComponent } from './piu_producto.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProductosRoutingModule
  ],
  declarations: [
    ProductosPIUuProductoComponent
  ],
  exports: [
    ProductosPIUuProductoComponent
  ]
})
export class ProductosModule { }
