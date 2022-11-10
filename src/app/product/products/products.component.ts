import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { Product } from '../models/product';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Product[]=[];
 selectedProductId:string | undefined;
 productToEdit: any
 @ViewChild(ProductdetailComponent) child: ProductdetailComponent | undefined;
 @ViewChild(EditProductComponent) child2:EditProductComponent | undefined;

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {

    this.products =this.productservice.getProducts();
  }
 
  showProduct(id:string){
    //console.log(id);
    this.selectedProductId=id;
  }

  selectProduct(productId: string){
    this.child?.showDetail(productId);
    console.log(productId);
    
  }
  setProduct(){
    this.child?.setProduct();
  }
  editProduct(product: Product){
    this.child2?.editProduct(product)
  }

}
