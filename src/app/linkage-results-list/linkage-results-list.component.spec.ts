import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkageResultsListComponent } from './linkage-results-list.component';

describe('LinkageResultsListComponent', () => {
  let component: LinkageResultsListComponent;
  let fixture: ComponentFixture<LinkageResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkageResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkageResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
