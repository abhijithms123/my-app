import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {

  @Output() productToEdit = new EventEmitter<Product>();
  editProduct() {
     this.productToEdit.emit(this.product!);
     this.setProduct();
  }

  constructor(private productservice: ProductService) {}

  @Input() //selectedProduct_Id:string="";
  set selectedProduct_Id(id: string) {
    if (id) {
      this.product = this.productservice.getProductById(id);
    }
  }

  product: Product | undefined | null;
  ngOnInit(): void {}

  // ngOnChanges(){
  //   if(this.selectedProduct_Id){
  //   this.product = this.productservice.getProductById(this.selectedProduct_Id);
  //   }
  // }
  showDetail(id: string) {
    if (id) {
      this.product = this.productservice.getProductById(id);
    }
  }
  setProduct() {
    this.product = null;
  }
}
