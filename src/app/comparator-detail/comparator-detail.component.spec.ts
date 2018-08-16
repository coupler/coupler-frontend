import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorDetailComponent } from './comparator-detail.component';

describe('ComparatorDetailComponent', () => {
  let component: ComparatorDetailComponent;
  let fixture: ComponentFixture<ComparatorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparatorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
