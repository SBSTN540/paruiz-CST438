import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'; // Add this
import { ProductItemListComponent } from './product-item-list/product-item-list.component'; // Add this
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'product-item-list', component: ProductItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
