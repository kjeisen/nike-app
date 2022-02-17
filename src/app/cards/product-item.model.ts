
export class ProductItemModel{
    img: string;
    title:string;
    genre:string;
    numColors:string;
    price:string;
    
    constructor(img:string, title:string, genre:string,numColors:string,price:string){
        this.img = img;
        this.title = title;
        this.genre = genre;
        this.numColors = numColors;
        this.price = price;
    }
}