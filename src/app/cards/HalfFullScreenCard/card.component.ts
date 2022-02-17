import { Component, Input } from "@angular/core";

@Component({
    selector: "n-card-component",
    templateUrl: "card.component.html",
    styleUrls: ["card.component.css"]
})

export class CardComponenets{

    @Input() img:string;
    @Input() title:string;
    @Input() genre:string;
    @Input() numColors:string;
    @Input() price:string;
    constructor(){
        this.img=""
        this.title="";
        this.genre="";
        this.numColors="";
        this.price="";
    }
}