import {AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { ProductItemModel } from "../cards/product-item.model";

@Injectable({
    providedIn:'root'
})
export class ProductService{
   
    constructor(private db:AngularFireDatabase){

    }
    public getProducts() {
        return this.db.list<ProductItemModel>("products").valueChanges();
    }
    public getProduct(index:number){
        
    }
}