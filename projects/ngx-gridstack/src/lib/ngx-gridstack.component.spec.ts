import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGridstackComponent } from './ngx-gridstack.component';

describe('NgxGridstackComponent', () => {
  let component: NgxGridstackComponent;
  let fixture: ComponentFixture<NgxGridstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGridstackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGridstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
