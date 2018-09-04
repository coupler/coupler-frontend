import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-migration-operation-detail',
  templateUrl: './migration-operation-detail.component.html',
  styleUrls: ['./migration-operation-detail.component.css']
})
export class MigrationOperationDetailComponent implements OnInit {
  @Input() operation: any;

  constructor() { }

  ngOnInit() {
  }

  describeOperationName(): string {
    switch (this.operation.name) {
      case 'add_field':
        return 'Add field';
      case 'cast':
        return 'Change field type';
      case 'merge':
        return 'Merge datasets';
      case 'remove_field':
        return 'Remove field';
      case 'rename':
        return 'Rename field';
      case 'select':
        return 'Subset fields';
    }
    return '';
  }
}
