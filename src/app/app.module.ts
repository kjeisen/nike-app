import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from './navigation/Header/TopNavBar/topnavbar.component';

import { AppComponent } from './app.component';
import { SecNavBarComponent } from './navigation/Header/SecondNavBar/secnavbar.component';
import { CardComponenets } from './cards/HalfFullScreenCard/card.component';
import { CarouselNavBar } from './navigation/CarouselNavBar/carousel-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { MenLayoutComponent } from './Layouts/Men/men-layout.component';
import { HomeLayoutComponent } from './Layouts/Home/home-layout.component';
import { FullScreenCardComponent } from './cards/FullScreenCard/full-screen-card.component';
import { WomenLayoutComponent } from './Layouts/Women/women-layout.component';
import { KidsLayoutComponent } from './Layouts/Kids/kids-layout.component';
import { NewReleasesLayoutComponent } from './Layouts/NewReleases/new-releases-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecNavBarComponent,
    CardComponenets,
    CarouselNavBar,
    MenLayoutComponent,
    HomeLayoutComponent,
    FullScreenCardComponent,
    WomenLayoutComponent,
    KidsLayoutComponent,
    NewReleasesLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
