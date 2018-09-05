import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkagesListComponent } from './linkages-list.component';

describe('LinkagesListComponent', () => {
  let component: LinkagesListComponent;
  let fixture: ComponentFixture<LinkagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
