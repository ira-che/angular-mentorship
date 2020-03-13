import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../../common/interfaces/product.interface';
import { AutoUnsubscribe } from '../../decorators/auto-unsubscribe.decorator';

import { ProductService } from '../../services/product.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
@AutoUnsubscribe()
export class ProductListComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  // public openDetailsList: boolean[];
  public subscriptions: Subscription[] = [];

  constructor(
    private requestService: RequestService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy inside Hello Component');
  }

  public trackByFunc = (index: number, item: Product): number | Product => item === undefined ? 0 : index;

  private getData(): void {
    const subscription: Subscription = this.requestService.getAllProducts().subscribe(
      (products: Product[]) => this.productService.Products = products,
      (error) => console.error(error),
      () => {
        this.products = this.productService.Products.map(item => {
          return {...item, collapsed: true};
        });
      }
    );
    this.subscriptions.push(subscription);
  }

}
