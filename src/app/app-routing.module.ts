import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ProductsComponent } from './product/products/products.component'
import { AddProductComponent } from './product/add-product/add-product.component';



const routes: Routes = [
 {path: "products", component:ProductsComponent},
 {path: "", component:HomeComponent},
 {path: "add-product", component:AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
