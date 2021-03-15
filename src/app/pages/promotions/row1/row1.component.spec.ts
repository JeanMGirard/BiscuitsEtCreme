import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Row1Component } from './row1.component';

describe('Row1Component', () => {
  let component: Row1Component;
  let fixture: ComponentFixture<Row1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Row1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Row1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
