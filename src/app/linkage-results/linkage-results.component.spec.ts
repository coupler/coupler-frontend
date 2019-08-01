import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkageResultsComponent } from './linkage-results.component';

describe('LinkageResultsComponent', () => {
  let component: LinkageResultsComponent;
  let fixture: ComponentFixture<LinkageResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkageResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkageResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
