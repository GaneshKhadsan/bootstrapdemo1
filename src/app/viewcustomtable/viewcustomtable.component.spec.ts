import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomtableComponent } from './viewcustomtable.component';

describe('ViewcustomtableComponent', () => {
  let component: ViewcustomtableComponent;
  let fixture: ComponentFixture<ViewcustomtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
