import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Linkage } from '../linkage';
import { Comparator } from '../comparator';

@Component({
  selector: 'app-comparators-list',
  templateUrl: './comparators-list.component.html',
  styleUrls: ['./comparators-list.component.css']
})
export class ComparatorsListComponent {
  @Input() linkage: Linkage;

  constructor(private router: Router) { }

  set1(comparator: Comparator): string {
    return comparator.sets.map(s => s.field1).join(", ");
  }

  set2(comparator: Comparator): string {
    return comparator.sets.map(s => s.field2).join(", ");
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/linkages', this.linkage.id, 'comparators', id]);
  }
}
