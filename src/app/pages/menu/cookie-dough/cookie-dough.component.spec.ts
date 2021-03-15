import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CookieDoughComponent } from './cookie-dough.component';

describe('CookieDoughComponent', () => {
  let component: CookieDoughComponent;
  let fixture: ComponentFixture<CookieDoughComponent>;

  beforeEach(waitForAsync(() => {
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
