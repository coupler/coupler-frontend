import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationOperationDetailComponent } from './migration-operation-detail.component';

describe('MigrationOperationDetailComponent', () => {
  let component: MigrationOperationDetailComponent;
  let fixture: ComponentFixture<MigrationOperationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrationOperationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationOperationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
