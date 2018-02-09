import { Component, OnInit, Input } from '@angular/core';

import { ClientError } from '../errors';

@Component({
  selector: 'app-client-error',
  templateUrl: './client-error.component.html',
  styleUrls: ['./client-error.component.css']
})
export class ClientErrorComponent implements OnInit {
  @Input() error: ClientError;

  constructor() { }

  ngOnInit() {
  }

}
