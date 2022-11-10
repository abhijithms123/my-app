import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/items';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}
  item1: Item = { itemSymbol: 'home', itemPath: '/',itemName:"Home" };
  item2: Item = { itemSymbol: 'store', itemPath: '/products' ,itemName:"Products"};
  item3: Item = { itemSymbol: 'add_card', itemPath: '/add-product',itemName:"Add Product" };
  //  menuItems =["HOME", "Products","Add Product"]
  menuItems = [this.item1, this.item2, this.item3];

  ngOnInit(): void {}
}
