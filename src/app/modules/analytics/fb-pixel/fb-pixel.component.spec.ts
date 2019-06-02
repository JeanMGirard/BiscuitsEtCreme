import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPixelComponent } from './fb-pixel.component';

describe('FbPixelComponent', () => {
  let component: FbPixelComponent;
  let fixture: ComponentFixture<FbPixelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPixelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPixelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
