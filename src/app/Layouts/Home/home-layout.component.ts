import { Component } from "@angular/core";
import { mock_product_list } from "../../cards/mock-product-list";
import { ProductItemModel } from "../../cards/product-item.model";

@Component({
    selector: 'n-home-layout',
    templateUrl: 'home-layout.component.html'
})
export class HomeLayoutComponent{
    title = 'nike-app';
  products: ProductItemModel [] = [];

  constructor(){
    for (var product of mock_product_list){
      console.log(product);
      this.products.push(product);
    }
  }

}