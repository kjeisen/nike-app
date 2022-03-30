import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Products/products.service';
import { ProductItemModel } from '../cards/product-item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'n-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product: ProductItemModel){
   this.ps.addProduct(product); 
  }

}