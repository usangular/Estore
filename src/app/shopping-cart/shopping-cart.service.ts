import {Product} from '../shared/product.model';
import {Subject} from 'rxjs';
export class ShoppingCartService{

  private  products: Product[]=[];

  productsChanged = new Subject<Product[]>();

  getProducts(){
      return  this.products.slice();
  }
  addProducts(product: Product){
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  addMultipleProducts(productsArr: Product[]){
    this.products.push(...productsArr);//spread operator
    this.productsChanged.next(this.products.slice());
  }

}