import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapLinkComponent } from './gmap-link.component';

describe('GmapLinkComponent', () => {
  let component: GmapLinkComponent;
  let fixture: ComponentFixture<GmapLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
