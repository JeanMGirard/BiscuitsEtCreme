import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parallax3Component } from './parallax3.component';

describe('Parallax3Component', () => {
  let component: Parallax3Component;
  let fixture: ComponentFixture<Parallax3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parallax3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
