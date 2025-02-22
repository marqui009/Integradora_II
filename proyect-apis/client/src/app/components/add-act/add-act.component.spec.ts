import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActComponent } from './add-act.component';

describe('AddActComponent', () => {
  let component: AddActComponent;
  let fixture: ComponentFixture<AddActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddActComponent]
    });
    fixture = TestBed.createComponent(AddActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
