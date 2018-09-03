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

}
