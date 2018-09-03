import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Migration } from '../migration';
import { Dataset } from '../dataset';
import { MigrationService } from '../migration.service';
import { DatasetService } from '../dataset.service';
import { ClientError, ValidationError } from '../errors';

@Component({
  selector: 'app-migration-form',
  templateUrl: './migration-form.component.html',
  styleUrls: ['./migration-form.component.css']
})
export class MigrationFormComponent implements OnInit {
  migration: Migration;
  datasets: Dataset[];

  newOperation = true;
  editIndex = 0;
  originalOperation: any;

  castFieldType = "";
  leftFieldName: string;
  rightFieldName: string;

  clientError: ClientError;
  validationError: ValidationError;

  @ViewChild('migrationForm') migrationForm: NgForm;
  @ViewChild('operationTabset') operationTabset: NgbTabset;

  constructor(
    private migrationService: MigrationService,
    private datasetService: DatasetService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.migration = new Migration();
    this.migration.operations = [{}];

    this.datasetService.getDatasets(true).subscribe(result => {
      if (result instanceof ClientError) {
        this.clientError = result;
      } else {
        this.datasets = result;
      }
    });
  }

  addOperation(): void {
    this.newOperation = true;
    this.originalOperation = {};
    this.migration.operations.push({});
    this.editIndex = this.migration.operations.length - 1;
    setTimeout(() => {
      this.operationTabset.select(`migration-operations-${this.editIndex}`);
    }, 1);
  }

  editOperation(index: number): void {
    this.newOperation = false;
    this.editIndex = index;
    this.originalOperation = Object.assign({}, this.migration.operations[index]);
  }

  resetEditOperation(index: number): void {
    if (this.originalOperation) {
      Object.assign(this.migration.operations[index], this.originalOperation);
    }
  }

  cancelEditOperation(index: number): void {
    if (this.newOperation) {
      // Remove new operation that was just cancelled
      this.migration.operations.splice(index, 1);
    } else if (this.originalOperation !== undefined) {
      Object.assign(this.migration.operations[index], this.originalOperation);
    }
    this.editIndex = undefined;
    this.originalOperation = undefined;
  }

  saveOperation(index: number): void {
    this.editIndex = undefined;
  }

  deleteOperation(index: number): void {
    this.editIndex = undefined;
    this.migration.operations.splice(index, 1);
  }

  isOperationValid(index: number): boolean {
    let op = this.migration.operations[index];
    if (op.name === "merge") {
      return op.left_field_names.length > 0 && op.left_field_names.length == op.right_field_names.length;
    } else {
      // If the operation is invalid, the whole form will be. This is a shortcut, but
      // if the non-operation parts of the form are invalid, operations won't even be
      // shown.
      return this.migrationForm.form.valid;
    }
  }

  inputDatasetIdChanged(id: number): void {
    this.migration.inputDataset = this.datasets.find(d => d.id == id);
  }

  outputDatasetIdChanged(id: number): void {
    this.migration.outputDataset = this.datasets.find(d => d.id == id);
  }

  operationTypeChanged(index: number, opType: string): void {
    if (opType === 'merge') {
      this.leftFieldName = undefined;
      this.rightFieldName = undefined;
      this.migration.operations[index].left_field_names = [];
      this.migration.operations[index].right_field_names = [];
    } else {
      this.migration.operations[index].left_field_names = undefined;
      this.migration.operations[index].right_field_names = undefined;
    }
  }

  castFieldNameChanged(fieldName: string): void {
    if (fieldName) {
      let field = this.migration.inputDataset.fields.find(f => f.name == fieldName);
      this.castFieldType = field.type;
    } else {
      this.castFieldType = "";
    }
  }

  addMergeFields(index: number): void {
    let op = this.migration.operations[index];
    op.left_field_names.push(this.leftFieldName);
    op.right_field_names.push(this.rightFieldName);
    this.leftFieldName = undefined;
    this.rightFieldName = undefined;
  }

  confirm(prompt: string): boolean {
    return window.confirm(prompt);
  }

  save(): void {
    this.migrationService.create(this.migration).subscribe(result => {
      if (result instanceof Migration) {
        this.router.navigate(['migrations', result.id]);
      } else if (result instanceof ClientError) {
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        this.validationError = result;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
