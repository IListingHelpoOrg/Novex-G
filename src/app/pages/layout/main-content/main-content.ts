import { Component, inject } from '@angular/core';
import { SideNav } from '../side-nav/side-nav';
import { Nav } from '../nav/nav';
import { RouterOutlet } from '@angular/router';
import { Layout } from '../layout';

@Component({
  selector: 'app-main-content',
  imports: [SideNav, Nav, RouterOutlet],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {
  layoutService = inject(Layout);
}
