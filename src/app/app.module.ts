import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from './navigation/Header/TopNavBar/topnavbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { SecNavBarComponent } from './navigation/Header/SecondNavBar/secnavbar.component';
import { CardComponent } from './cards/HalfFullScreenCard/card.component';
import { CarouselNavBar } from './navigation/CarouselNavBar/carousel-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { MenLayoutComponent } from './Layouts/Men/men-layout.component';
import { HomeLayoutComponent } from './Layouts/Home/home-layout.component';
import { FullScreenCardComponent } from './cards/FullScreenCard/full-screen-card.component';
import { WomenLayoutComponent } from './Layouts/Women/women-layout.component';
import { KidsLayoutComponent } from './Layouts/Kids/kids-layout.component';
import { NewReleasesLayoutComponent } from './Layouts/NewReleases/new-releases-layout.component';
import { FooterComponent } from './navigation/Footer/footer.component';
import { NikeMemberBannerComponent } from './navigation/banners/nike-member-banner/nike-member-banner.component';
import { SignInModalComponent } from './Modals/sign-in.component';
import { MensUpperFooterComponent } from './navigation/Footer/men-upper-footer.component';
import { ScrollCardsComponent } from './cards/ScrollCards/scroll-cards.component';
import { SignUpComponent } from './Modals/sign-up.component';
import {HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecNavBarComponent,
    FooterComponent,
    CardComponent,
    CarouselNavBar,
    MenLayoutComponent,
    HomeLayoutComponent,
    FullScreenCardComponent,
    WomenLayoutComponent,
    KidsLayoutComponent,
    NewReleasesLayoutComponent,
    NikeMemberBannerComponent,
    SignInModalComponent,
    MensUpperFooterComponent,
    ScrollCardsComponent,
    SignUpComponent,
    UserInfoComponent,
    AdminComponent,
    AuthenticationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
