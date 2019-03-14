import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/product.model';
import {ProductService} from '../product.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: Product[]=[];
  private subscription: Subscription;
  constructor(private productService: ProductService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
    this.subscription= this.productService.productsChanged.subscribe(
      (productsArr: Product[]) => {
            this.products=productsArr;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  onNewProduct(){
   this.router.navigate(['new'],{relativeTo: this.route});
  }

}
