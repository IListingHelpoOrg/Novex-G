import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Footer } from './pages/layout/footer/footer';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: Landing },
	{ path: 'footer', component: Footer },
];
