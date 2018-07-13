import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetBrowserComponent } from './dataset-browser.component';

describe('DatasetBrowserComponent', () => {
  let component: DatasetBrowserComponent;
  let fixture: ComponentFixture<DatasetBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
