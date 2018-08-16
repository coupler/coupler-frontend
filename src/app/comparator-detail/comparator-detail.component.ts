import { Component, OnInit, Input } from '@angular/core';
import { Comparator } from '../comparator';
import { Linkage } from '../linkage';

@Component({
  selector: 'app-comparator-detail',
  templateUrl: './comparator-detail.component.html',
  styleUrls: ['./comparator-detail.component.css']
})
export class ComparatorDetailComponent implements OnInit {
  @Input() comparator: Comparator;
  @Input() linkage: Linkage;

  constructor() { }

  ngOnInit() {
  }

}
