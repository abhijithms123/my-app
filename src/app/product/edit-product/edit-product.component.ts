import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductsComponent } from '../products/products.component';
import { ProductService } from '../services/product.service';
// import { priceCategoryValidator, priceEvenValidator } from '../validators/product.validators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}
@Output() message = new EventEmitter<string>()
  product: Product | null
  // {
  //   id:"",
  //   title:"",
  //   category:"",
  //   imagePath:"",
  //   productDetail:"",price:0
  // }
  | undefined
  // {
  //   id:"",
  //   title:"",
  //   category:"",
  //   imagePath:"",
  //   productDetail:"",price:0
  // }

  ngOnInit(): void {}

  categories = ['SmartPhone', 'Laptop', 'Monitor'];
  // text =this.product.title;
  isvalid = true;
  productForm: FormGroup = this.fb.group(
    {
      title: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      price: [
        "",
        // [Validators.required, Validators.max(10000000), priceEvenValidator()],
      ],
      category: ["", Validators.required],
      productDetail: [""],
      imagePath: [ "", Validators.required],
    }
    // ,
    // { validator: priceCategoryValidator() }
  );
  // productForm: FormGroup = new FormGroup({
  //   title: new FormControl(),
  //   price: new FormControl(),
  //   cagegory: new FormControl(),
  //   productDetail: new FormControl(),
  //   imagePath: new FormControl(),

  // });
  // product: Product ={
  //   title:"",
  //   price:0,
  //   id:"",
  //   category:"",
  //   imagePath:"",
  //   productDetail:""

  // }

  editProduct(product: Product) {
    // if (this.productForm.valid) {
    //   this.productService.editProduct(this.productForm.value);
    //   this.router.navigate(['products']);
    // }
    this.product = product;
    this.productForm.setValue({
      "title" : this.product.title,
      "category":this.product.category,
      "price":this.product.price,
      "imagePath":this.product.imagePath,
      "productDetail":this.product.productDetail
    })
  }
  isInvalid(field: string) {
    return (
      this.productForm.get(field)?.invalid &&
      (this.productForm.get(field)?.dirty || this.productForm.get(field)?.touched)
    );
  }

  save(){
    if (this.productForm.valid) {
     let editedProduct = this.productForm.value;
     editedProduct.id = this.product?.id;
      this.productService.editProduct(editedProduct);
      // this.router.navigate(['products'])
      this.product = null;
      this.message.emit("Product Updated Successfully")

    }
    }

}
