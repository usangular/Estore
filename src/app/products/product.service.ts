import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Subject } from 'rxjs';
@Injectable()
export class ProductService {
  productsChanged = new Subject<Product[]>();

  constructor(private scsService: ShoppingCartService) { }


  private products: Product[] = [
    new Product('Apple iPad', 'This is iPad generation 4',
      'iPad.jpg', 800)
    ,
    new Product('Apple iPhone', 'This is iPhone XR',
      'iPhone.png', 990)
    ,
    new Product('Nikon SLR', 'This is Nikon SLR 360',
      'Nikon.jpg', 500)
    ,
    new Product('Samsung TV', 'This is Samsung 55 inches television.',
      'Samsung.jpg', 700)

  ];

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());

  }

  addProductToShoppingCart(product: Product) {
    this.scsService.addProducts(product);
  }
}