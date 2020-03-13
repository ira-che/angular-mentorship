import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnglishLessonsComponent } from './page-english-lessons.component';

describe('PageEnglishLessonsComponent', () => {
  let component: PageEnglishLessonsComponent;
  let fixture: ComponentFixture<PageEnglishLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEnglishLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEnglishLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
