import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';
import { ProductService } from '../product.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id: number;
  constructor(private productService: ProductService, private router: ActivatedRoute,
    private route: Router, public notifier: NotifierService) {

    this.notifier = notifier;
  }
  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; //typecasting
        this.product = this.productService.getProduct(this.id);
      }
    );
  }
  onAddToShoppingCart() {
    this.notifier.notify('success', 'Product is added to the shopping cart!');
    this.productService.addProductToShoppingCart(this.product);
  }

}
