import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html'
})
export class ProductAddComponent implements OnInit {

  constructor(private pService: ProductService) { }
  ngOnInit() {

  }

  onAddProduct(form: NgForm) {

    const value = form.value;
    const newProduct = new Product(value.name, value.description, value.imagePath, value.productPrice);//create object
    this.pService.addProduct(newProduct);
  }

}
