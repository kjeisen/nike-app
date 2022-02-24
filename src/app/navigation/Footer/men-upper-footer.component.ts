import { Component } from "@angular/core";
import { mock_product_list } from "./mock-product-list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector:'n-mens-upper-footer',
    templateUrl: 'men-upper-footer.component.html',
    styleUrls:[
        'men-upper-footer.component.css'
    ]
})
export class MensUpperFooterComponent{
    products: ProductItemModel [] = [];

    constructor(){
      for (var product of mock_product_list){
        console.log(product);
        this.products.push(product);
      }
    }
}