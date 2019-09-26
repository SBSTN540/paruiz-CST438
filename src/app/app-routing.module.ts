import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { ProductItemListComponent } from './product-item-list/product-item-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'product-item-list', component: ProductItemListComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout-page', component: CheckoutPageComponent },
  { path: 'confirmation', component: OrderConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
