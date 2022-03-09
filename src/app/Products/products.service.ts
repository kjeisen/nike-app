import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "../cards/product-item.model";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    private baseUrl:string='https://nike-app-2200b-default-rtdb.firebaseio.com/'
    private productsEndPoint:string = 'products/'
    constructor(private http:HttpClient){

    }
    public getProducts() {
        return this.http.get<ProductItemModel []>(this.baseUrl+this.productsEndPoint +'.json');
    }
    public getProduct(index:number){
        return this.http.get<ProductItemModel>(this.baseUrl+this.productsEndPoint+ index+'.json')
    }
}