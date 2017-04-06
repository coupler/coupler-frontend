import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorsListComponent } from './comparators-list.component';

describe('ComparatorsListComponent', () => {
  let component: ComparatorsListComponent;
  let fixture: ComponentFixture<ComparatorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparatorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
