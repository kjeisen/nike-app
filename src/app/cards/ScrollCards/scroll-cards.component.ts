import { Component, Input } from "@angular/core";
import { mock_product_list_scroll } from "./mock-product-list-scroll";
import { ProductItemModelScroll } from "./product-item-scroll.model";

@Component({
    selector: 'n-scroll-cards',
    templateUrl: 'scroll-cards.component.html',
    styleUrls: [
        'scroll-cards.component.css'
    ]
})
export class ScrollCardsComponent{
    products: ProductItemModelScroll [] = [];

    constructor(){
      for (var product of mock_product_list_scroll){
        console.log(product);
        this.products.push(product);
      }
    }

}