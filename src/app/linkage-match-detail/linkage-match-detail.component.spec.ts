import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkageMatchDetailComponent } from './linkage-match-detail.component';

describe('LinkageMatchDetailComponent', () => {
  let component: LinkageMatchDetailComponent;
  let fixture: ComponentFixture<LinkageMatchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkageMatchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkageMatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
