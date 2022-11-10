import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
summary:any;
  constructor(
    private productservice:ProductService
  ) { }

  ngOnInit(): void {

    this.summary =this.productservice.getProductSummary();
  }
}
