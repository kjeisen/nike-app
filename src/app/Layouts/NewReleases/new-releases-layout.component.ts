import { Component } from "@angular/core";
import { mock_product_list } from "src/app/cards/mock-product-list";
import { ProductItemModel } from "src/app/cards/product-item.model";
@Component({
    selector:'n-new-releases-layout',
    templateUrl:'new-releases-layout.component.html',
    styleUrls: [
        'new-releases-layout.component.css'
    ]
})
export class NewReleasesLayoutComponent{
    products: ProductItemModel [] = [];

    constructor(){
      for (var product of mock_product_list){
        console.log(product);
        this.products.push(product);
      }
}
}