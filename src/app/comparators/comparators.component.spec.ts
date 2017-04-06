import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorsComponent } from './comparators.component';

describe('ComparatorsComponent', () => {
  let component: ComparatorsComponent;
  let fixture: ComponentFixture<ComparatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
