import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorFormComponent } from './comparator-form.component';

describe('ComparatorFormComponent', () => {
  let component: ComparatorFormComponent;
  let fixture: ComponentFixture<ComparatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
