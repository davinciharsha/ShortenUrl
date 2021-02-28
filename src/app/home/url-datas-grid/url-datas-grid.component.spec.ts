import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDatasGridComponent } from './url-datas-grid.component';

describe('UrlDatasGridComponent', () => {
  let component: UrlDatasGridComponent;
  let fixture: ComponentFixture<UrlDatasGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlDatasGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlDatasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
