import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[]  = [
    new Product(
      uuidv4(),
      'Lenovo',
      1000,
      'Smart Phone',
      '../../../assets/lenovo.png',
      'This lenovo smartphone is really good and is loved by customers'
    ),

    new Product(
      uuidv4(),

      'Apple',
      6000,
      'Smart Phone',
      '../../../assets/apple.png',
      'this apple product is an example of advance in technology'
    ),

    new Product(
      uuidv4(),

      'Dell',
      5000,
      'Laptop',
      '../../../assets/dell.png',
      'Dell products are reliable and manageable'
    ),

    new Product(
      uuidv4(),

      'Oppo',
      2000,
      'Smart Phone',
      '../../../assets/oppo.png',
      'Oppo provides good services to their customeres.'
    ),
  ];
  monitorCount: number | undefined;
  laptopCount: number | undefined;
  smartphoneCount: number | undefined;

  // getCount() {
  //   this.monitorCount = 0;
  //   this.laptopCount = 0;
  //   this.smartphoneCount = 0;
  //   this.products.forEach((products) => {
  //     switch (products.category) {
  //       case 'Smart Phone':
  //         this.smartphoneCount++;
  //         break;
  //       case 'Laptop':
  //         this.laptopCount++;
  //         break;
  //       case 'Monitor':
  //         this.monitorCount++;
  //         break;
  //     }
    // });
  // }
  constructor() {}

  public getProducts() {
    return this.products;
  }

  getProductSummary() {
    // this.getCount();
    return [
      { category: 'Smart Phone', number: this.smartphoneCount },
      { category: 'Laptop', number: this.laptopCount },
      { category: 'Monitor', number: this.monitorCount },
    ];
  }

  getProductById(productId: string ){
    return this.products.find((p) => p.id === productId);
  }

  addProduct(product: Product) {
    product.id = uuidv4();
    this.products.push(product);
  }

  editProduct(product: Product ) {
    let edited:Product|any=this.getProductById(product.id)
    let index=this.products.indexOf(edited)

   this.products[index]=product
  //  console.log(this.products);
   
  // console.log(this.products);
  // console.log('saved');
  // console.log(index);
  

    
  }
  returnSummary() {
    return;
  }
}
