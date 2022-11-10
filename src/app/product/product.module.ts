import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';




@NgModule({
  
  declarations: [ProductsComponent, ProductdetailComponent,AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[ProductsComponent]
})
export class ProductModule { }
