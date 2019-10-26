import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLandingComponent } from './settings-landing.component';

describe('SettingsLandingComponent', () => {
  let component: SettingsLandingComponent;
  let fixture: ComponentFixture<SettingsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
