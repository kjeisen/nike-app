import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from './navigation/Header/TopNavBar/topnavbar.component';

import { AppComponent } from './app.component';
import { SecNavBarComponent } from './navigation/Header/SecondNavBar/secnavbar.component';
import { CardComponenets } from './cards/card.component';
import { CarouselNavBar } from './navigation/CarouselNavBar/carousel-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecNavBarComponent,
    CardComponenets,
    CarouselNavBar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
