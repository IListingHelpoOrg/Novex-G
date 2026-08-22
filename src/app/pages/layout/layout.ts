import { Service, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light' | 'dark';
@Service()
export class Layout {
    private document = inject(DOCUMENT);
    private readonly THEME_KEY = 'app_theme';

    // Signals for layout state
    isCollapsed = signal<boolean>(false);
    currentTheme = signal<Theme>(this.getInitialTheme());

    constructor() {
        // Apply saved theme on application initialization
        this.applyTheme(this.currentTheme());
    }
    toggleSidenav(): void {
        this.isCollapsed.update((state) => !state);
    }
    // Toggle Theme between Light & Dark
  toggleTheme(): void {
    const newTheme: Theme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  // Set explicit theme
  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }

  // Retrieve theme preference from localStorage on page load
  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Fallback: check user OS system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Add/Remove class on <html> element
  private applyTheme(theme: Theme): void {
    const root = this.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }
}
