import { Injectable } from '@angular/core';

import { Product } from '../common/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private product: Product;

  constructor() { }

  public set Products(products: Product[]) {
    this.products = products;
  }

  public get Products(): Product[] {
    return this.products;
  }

  public set Product(product: Product) {
    this.product = product;
  }

  public get Product(): Product {
    return this.product;
  }
}
