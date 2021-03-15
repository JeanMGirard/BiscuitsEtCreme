import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuLinksComponent } from './menu-links.component';

describe('Row2Component', () => {
  let component: MenuLinksComponent;
  let fixture: ComponentFixture<MenuLinksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
