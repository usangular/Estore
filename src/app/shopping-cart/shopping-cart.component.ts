import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../shared/product.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];
  private subscription: Subscription;
  constructor(private scService: ShoppingCartService) { }
  ngOnInit() {
    this.products = this.scService.getProducts();
    this.subscription = this.scService.productsChanged.subscribe(
      (productsArr: Product[]) => {
        this.products = productsArr;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
