import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesLinkComponent } from './commandes-link.component';

describe('CommandesLinkComponent', () => {
  let component: CommandesLinkComponent;
  let fixture: ComponentFixture<CommandesLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandesLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
