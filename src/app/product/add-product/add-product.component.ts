import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
// import { @angular/forms } from "module";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import {
//   priceCategoryValidator,
//   priceEvenValidator,
// } from '../validators/product.validators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  categories = ['SmartPhone', 'Laptop', 'Monitor'];
  isvalid = true;
  productForm: FormGroup = this.fb.group(
    {
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      price: [
        '',
        [Validators.required, Validators.max(10000000)],
      ],
      category: ['Monitor', Validators.required],
      productDetail: ["This is a fantastic product and has received a lot of positive reviews from its users... "],
      imagePath: ['', Validators.required],
    },
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

  ngOnInit(): void {}
  addProduct() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value);
      this.router.navigate(['products']);
    }
  }
  isInvalid(field: string) {
    return (
      this.productForm.get(field)?.invalid &&
      (this.productForm.get(field)?.dirty || this.productForm.get(field)?.touched)
    );
  }

}
