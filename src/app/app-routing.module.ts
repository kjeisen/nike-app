import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { MenLayoutComponent } from './Layouts/Men/men-layout.component';
import { HomeLayoutComponent } from './Layouts/Home/home-layout.component';
import { WomenLayoutComponent } from './Layouts/Women/women-layout.component';
import { KidsLayoutComponent } from './Layouts/Kids/kids-layout.component';
import { NewReleasesLayoutComponent } from './Layouts/NewReleases/new-releases-layout.component';

const routes:Routes = [
  {
    path:'',
    component: HomeLayoutComponent
  },
  {
    path: 'men', 
    component: MenLayoutComponent

  },
  {
    path: 'women',
    component: WomenLayoutComponent
  },
  {
    path: "kids",
    component: KidsLayoutComponent
  },
  {
    path:"new-releases",
    component: NewReleasesLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
