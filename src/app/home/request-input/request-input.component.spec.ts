import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInputComponent } from './request-input.component';

describe('RequestInputComponent', () => {
  let component: RequestInputComponent;
  let fixture: ComponentFixture<RequestInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
