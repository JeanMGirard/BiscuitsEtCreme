import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDoughComponent } from './cookie-dough.component';

describe('CookieDoughComponent', () => {
  let component: CookieDoughComponent;
  let fixture: ComponentFixture<CookieDoughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieDoughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieDoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
