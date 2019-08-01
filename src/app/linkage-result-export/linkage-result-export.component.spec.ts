import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkageResultExportComponent } from './linkage-result-export.component';

describe('LinkageResultExportComponent', () => {
  let component: LinkageResultExportComponent;
  let fixture: ComponentFixture<LinkageResultExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkageResultExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkageResultExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
