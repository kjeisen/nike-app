
export class ProductItemModel{
    img: string;
    
    descTop: string;
    descBottom:string;
    
    constructor(img:string, descTop:string, descBottom:string){
        this.img = img;
        this.descTop = descTop;
        this.descBottom = descBottom;
    }
}