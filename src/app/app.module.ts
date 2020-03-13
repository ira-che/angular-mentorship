import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { PageProductListComponent } from './components/page-product-list/page-product-list.component';
import { PageEnglishLessonsComponent } from './components/page-english-lessons/page-english-lessons.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterComponent,
    HeaderComponent,
    TerminalComponent,
    PageProductListComponent,
    PageEnglishLessonsComponent,
    TopMenuComponent,
    ProductListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PageProductListComponent
      },
      {
        path: 'english',
        component: PageEnglishLessonsComponent
      },
      {
        path: 'js',
        component: PageEnglishLessonsComponent
      },
      {
        path: 'products/:productId',
        component: PageProductListComponent
      },
      {
        path: 'cart',
        component: PageProductListComponent
      },
      {
        path: 'shipping',
        component: PageProductListComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
