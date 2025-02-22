import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistActComponent } from './hist-act.component';

describe('HistActComponent', () => {
  let component: HistActComponent;
  let fixture: ComponentFixture<HistActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistActComponent]
    });
    fixture = TestBed.createComponent(HistActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
