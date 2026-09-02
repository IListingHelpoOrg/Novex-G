import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './pages/layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Novex-g');
  private readonly layoutService = inject(Layout);
}
