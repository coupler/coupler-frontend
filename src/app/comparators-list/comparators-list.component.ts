import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Linkage } from '../linkage';

@Component({
  selector: 'app-comparators-list',
  templateUrl: './comparators-list.component.html',
  styleUrls: ['./comparators-list.component.css']
})
export class ComparatorsListComponent {
  @Input() linkage: Linkage;

  constructor(private router: Router) { }

  gotoDetail(id: number): void {
    this.router.navigate(['/linkages', this.linkage.id, 'comparators', id]);
  }
}
