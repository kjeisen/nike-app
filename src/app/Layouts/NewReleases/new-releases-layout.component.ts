import { Component, OnInit } from "@angular/core";
import { mock_product_list } from "src/app/cards/mock-product-list";
import { ProductItemModel } from "src/app/cards/product-item.model";
import { ProductService } from "src/app/Products/products.service";
@Component({
    selector:'n-new-releases-layout',
    templateUrl:'new-releases-layout.component.html',
    styleUrls: [
        'new-releases-layout.component.css'
    ]
})
export class NewReleasesLayoutComponent implements OnInit{
    products: ProductItemModel [] = [];

    constructor(private service:ProductService){
     
}
  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{ 
      console.log("Fetch data");
      for (var product of data){
        this.products.push(product);
      }
          
    })
  }
}