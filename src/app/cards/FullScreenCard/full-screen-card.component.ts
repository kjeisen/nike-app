import { Component, Input } from "@angular/core";

@Component({
    selector:'n-full-card',
    templateUrl: 'full-screen-card.component.html',
    styleUrls: [
        'full-screen-card.component.css'
    ]
})
export class FullScreenCardComponent{
    @Input() img:string;
    @Input() descTop:string;
    @Input() descBottom:string;
    @Input() descBotS:string;
    @Input() descMidS:string;
    @Input() descTopS:string;
    @Input() theme:string;
    @Input() textTheme:string;
    constructor(){
        this.img=""
        this.descTop="";
        this.descBottom="";
        this.descMidS="";
        this.descBotS="";
        this.descTopS="";
        this.theme="white";
        this.textTheme="";
    }
}