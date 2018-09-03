import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Migration } from '../migration';

@Component({
  selector: 'app-migrations-list',
  templateUrl: './migrations-list.component.html',
  styleUrls: ['./migrations-list.component.css']
})
export class MigrationsListComponent {
  @Input() migrations: Migration[] = [];

  constructor(private router: Router) { }

  gotoDetail(id: number): void {
    this.router.navigate(['/migrations', id]);
  }
}
