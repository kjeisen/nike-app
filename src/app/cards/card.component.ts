import { Component, Input } from "@angular/core";

@Component({
    selector: "n-card-component",
    templateUrl: "card.component.html",
    styleUrls: ["card.component.css"]
})

export class CardComponenets{

    @Input() img:string;
    @Input() descTop:string;
    @Input() descBottom:string;
    constructor(){
        this.img=""
        this.descTop="";
        this.descBottom="";
    }
}