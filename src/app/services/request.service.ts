import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  of
} from 'rxjs';
import {
  map,
  catchError,
  tap
} from 'rxjs/operators';

import { MessageService } from './message.service';

import { MenuItem } from '../common/interfaces/menu.item.interface';
import { Product } from '../common/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  public getMenuItems = (): Observable<MenuItem[]> => {
    return this.httpClient.get<MenuItem[]>('/assets/menu.json')
      .pipe(
        map(
          (menuItems: MenuItem[]) => {
            if (!menuItems || menuItems.length === 0) {
              return ([] as MenuItem[]);
            }
            return menuItems;
          }
        ),
        tap(_ => this.log(`updated menu list`)),
        catchError( this.handleError<MenuItem[]>('getMenuItems', [] as MenuItem[]) )
      );
  }

  public getAllProducts = (): Observable<Product[]> =>
    this.httpClient.get<Product[]>('/assets/product.list.json')
      .pipe(
        map(
          (products: Product[]) => {
            if (!products || products.length === 0) {
              this.log(`getAllProducts failed: the list is empty`);
              return ([] as Product[]);
            }
            return products;
          }
        ),
        tap(_ => this.log(`updated product list`)),
        catchError(this.handleError<Product[]>('getAllProducts', [] as Product[]))
      )

  public getProductByIndex = (index: number): Observable<Product> =>
    this.getAllProducts().pipe(
      map(
        (products: Product[]) => {
          if (!products || products.length === 0) {
            return ({} as Product);
          }
          const productsArray: Product[] = products.filter((item: Product, i: number) => i === index);
          if (productsArray.length === 0) {
            return ({} as Product);
          }
          return productsArray[0];
        }
      ),
      catchError(this.handleError<Product>('getProductByIndex', {} as Product))
    )

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    if (!message) {
      return;
    }
    this.messageService.add(`RequestService: ${message}`);
  }
}
