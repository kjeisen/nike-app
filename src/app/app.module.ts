import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from './navigation/TopNavBar/topnavbar.component';

import { AppComponent } from './app.component';
import { SecNavBarComponent } from './navigation/SecondNavBar/secnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
