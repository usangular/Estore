import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsComponent} from './products/products.component';
import {ProductStartComponent} from './products/product-start/product-start.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component'

const appRoutes: Routes=[
  {path: '',redirectTo: '/products',pathMatch:'full'},
  {path: 'products',component: ProductsComponent,children: [
      { path:'', component: ProductStartComponent},
      { path:'new', component: ProductAddComponent},
      { path:':id', component: ProductDetailComponent}
   ] },
   {path: 'shopping-cart',component: ShoppingCartComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
