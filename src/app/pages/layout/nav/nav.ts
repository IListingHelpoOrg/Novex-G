import { Component, inject } from '@angular/core';
import { Layout } from '../layout';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  layoutService = inject(Layout);
}
