import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Footer } from './pages/layout/footer/footer';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { PasswordReset } from './pages/password-reset/password-reset';
import { MainContent } from './pages/layout/main-content/main-content';
import { Settings } from './pages/settings/settings';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: Landing },
	{ path: 'login', component: Login },
	{ path: 'signup', component: Signup },
	{ path: 'forgot-password', component: PasswordReset },
	{
		path: '', component: MainContent, children: [
			{ path: 'admin-dashboard', component: AdminDashboard },
			{ path: 'client-dashboard', component: Dashboard },
			{ path: 'settings', component: Settings }
		]
	},
];
