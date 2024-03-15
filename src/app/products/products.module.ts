import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PriceComponent } from './components/price/price.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [PriceComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [PriceComponent, ProductComponent],
})
export class ProductsModule {}
