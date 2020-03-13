import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-product-list',
  templateUrl: './page-product-list.component.html',
  styleUrls: ['./page-product-list.component.css']
})
export class PageProductListComponent implements OnInit {
  public title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Products';
  }

}
