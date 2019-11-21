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
  @Input() canDelete: boolean;
  @Input() innerLinkage: boolean;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() delete = new EventEmitter();

  @ViewChild('comparatorForm', { static: true }) comparatorForm: NgForm;

  initialValue: Comparator;

  constructor() { }

  ngOnInit() {
    if ((this.initComparison === undefined && !this.comparator.id) || this.initComparison) {
      this.addComparison();
    }
    if (this.canDelete === undefined) {
      this.canDelete = this.comparator.id !== undefined;
    }
    this.initialValue = this.comparator.clone();

    if (this.innerLinkage === undefined) {
      this.innerLinkage = this.linkage.dataset1Id === this.linkage.dataset2Id;
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
    Object.assign(this.comparator, this.initialValue);
    this.cancel.emit();
  }
}
