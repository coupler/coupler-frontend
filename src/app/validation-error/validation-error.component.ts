import { Component, OnInit, Input } from '@angular/core';

import { ValidationError } from '../errors';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit {
  @Input() error: ValidationError;

  constructor() { }

  ngOnInit() {
  }
}
