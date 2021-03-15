import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtherProductsComponent } from './other-products.component';

describe('OtherProductsComponent', () => {
  let component: OtherProductsComponent;
  let fixture: ComponentFixture<OtherProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
