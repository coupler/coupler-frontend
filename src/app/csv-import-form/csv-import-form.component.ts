import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CsvImport } from '../csv-import';
import { CsvImportService } from '../csv-import.service';
import { ClientError, ValidationError } from '../errors';

@Component({
  selector: 'app-csv-import-form',
  templateUrl: './csv-import-form.component.html',
  styleUrls: ['./csv-import-form.component.css']
})
export class CsvImportFormComponent implements OnInit {
  csvImport: CsvImport;
  headers: string[];
  primaryKeyIndex: number;
  previousPrimaryKeyIndex: number;
  clientError: ClientError;
  validationError: ValidationError;
  @Output() ready = new EventEmitter();

  constructor(private csvImportService: CsvImportService) { }

  ngOnInit(): void {
  }

  primaryKeyChanged(): void {
    if (this.previousPrimaryKeyIndex !== undefined) {
      this.csvImport.fields[this.previousPrimaryKeyIndex].primary_key = undefined;
    }
    this.csvImport.fields[this.primaryKeyIndex].primary_key = true;
    this.previousPrimaryKeyIndex = this.primaryKeyIndex;
  }

  handleFileInput(files: FileList): void {
    let file = files[0];
    var reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      let csvImport = new CsvImport();
      csvImport.originalName = file.name;
      csvImport.data = event.target.result;

      this.csvImportService.create(csvImport).subscribe(result => {
        if (result instanceof CsvImport) {
          this.fetch(result.id);
        } else if (result instanceof ClientError) {
          console.log('client error:', result);
          this.clientError = result;
        } else if (result instanceof ValidationError) {
          console.log('validation error:', result);
          this.validationError = result;
        } else {
          console.log('unknown error:', result);
        }
      });
    });
    reader.readAsText(file);
  }

  fetch(id: number): void {
    this.csvImportService.getCsvImport(id).subscribe(result => {
      if (result instanceof CsvImport) {
        this.csvImport = result;
      } else if (result instanceof ClientError) {
        console.log('client error:', result);
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        console.log('validation error:', result);
        this.validationError = result;
      } else {
        console.log('unknown error:', result);
      }
    });
  }

  submit(): void {
    this.csvImportService.update(this.csvImport).subscribe(result => {
      if (result instanceof CsvImport) {
        this.ready.emit(this.csvImport);
      } else if (result instanceof ClientError) {
        console.log('client error:', result);
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        console.log('validation error:', result);
        this.validationError = result;
      } else {
        console.log('unknown error:', result);
      }
    });
  }
}
