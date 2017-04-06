import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkageFormComponent } from './linkage-form.component';

describe('LinkageFormComponent', () => {
  let component: LinkageFormComponent;
  let fixture: ComponentFixture<LinkageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
