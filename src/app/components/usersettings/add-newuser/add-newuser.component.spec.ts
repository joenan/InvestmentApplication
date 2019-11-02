import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewuserComponent } from './add-newuser.component';

describe('AddNewuserComponent', () => {
  let component: AddNewuserComponent;
  let fixture: ComponentFixture<AddNewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
