import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductListComponent } from './page-product-list.component';

describe('PageProductListComponent', () => {
  let component: PageProductListComponent;
  let fixture: ComponentFixture<PageProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
