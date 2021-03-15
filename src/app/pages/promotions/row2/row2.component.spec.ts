import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Row2Component } from './row2.component';

describe('Row2Component', () => {
  let component: Row2Component;
  let fixture: ComponentFixture<Row2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Row2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Row2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
