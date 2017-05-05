import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkageResultDetailComponent } from './linkage-result-detail.component';

describe('LinkageResultDetailComponent', () => {
  let component: LinkageResultDetailComponent;
  let fixture: ComponentFixture<LinkageResultDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkageResultDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkageResultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
