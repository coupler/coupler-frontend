import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorEditComponent } from './comparator-edit.component';

describe('ComparatorEditComponent', () => {
  let component: ComparatorEditComponent;
  let fixture: ComponentFixture<ComparatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
