import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Linkage } from '../linkage';
import { Comparator } from '../comparator';

@Component({
  selector: 'app-comparator-form',
  templateUrl: './comparator-form.component.html',
  styleUrls: ['./comparator-form.component.css']
})
export class ComparatorFormComponent implements OnInit {
  @Input() linkage: Linkage;
  @Input() comparator: Comparator;
  @Input() initComparison: boolean;
  @Input() canCancel = true;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() delete = new EventEmitter();

  @ViewChild('comparatorForm') comparatorForm: NgForm;

  constructor() { }

  ngOnInit() {
    if ((this.initComparison === undefined && !this.comparator.id) || this.initComparison) {
      this.addComparison();
    }
  }

  addComparison(): void {
    this.comparator.sets.push({ field1: "", field2: "" });
  }

  removeRow(index: number): void {
    this.comparator.sets.splice(index, 1);
  }

  confirm(prompt: string): boolean {
    return window.confirm(prompt);
  }

  doCancel(): void {
    if (this.comparator.id) {
      this.comparatorForm.reset();
    }
    this.cancel.emit();
  }
}
