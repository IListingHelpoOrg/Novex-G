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
import { CreateTicket } from './pages/support/create-ticket/create-ticket';

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
			{ path: 'support/create-ticket', loadComponent: () => import('./pages/support/create-ticket/create-ticket').then(m => m.CreateTicket) },
			{ path: 'support/view-ticket', loadComponent: () => import('./pages/support/view-ticket/view-ticket').then(m => m.ViewTicket) },
			{ path: 'earning/club-bonus', loadComponent: () => import('./pages/earning/club-bonus/club-bonus').then(m => m.ClubBonus) },
			{ path: 'earning/reward-income', loadComponent: () => import('./pages/earning/reward-income/reward-income').then(m => m.RewardIncome) },
			{ path: 'earning/staking-bonus', loadComponent: () => import('./pages/earning/staking-bonus/staking-bonus').then(m => m.StakingBonus) },
			{ path: 'earning/staking-level-bonus', loadComponent: () => import('./pages/earning/staking-level-bonus/staking-level-bonus').then(m => m.StakingLevelBonus) },
			{ path: 'team/all', loadComponent: () => import('./pages/community/all-team/all-team').then(m => m.AllTeam) },
			{ path: 'team/level-list', loadComponent: () => import('./pages/community/level-list/level-list').then(m => m.LevelList) },
			{ path: 'team/referral-tree', loadComponent: () => import('./pages/community/referral-team/referral-team').then(m => m.ReferralTeam) },
			{ path: 'reports/income', loadComponent: () => import('./pages/reports/income-wallet/income-wallet').then(m => m.IncomeWallet) },
			{ path: 'reports/wallet', loadComponent: () => import('./pages/reports/wallet-report/wallet-report').then(m => m.WalletReport) },
			{ path: 'e-wallet/buy-package', loadComponent: () => import('./pages/e-wallet/buy-package/buy-package').then(m => m.BuyPackage) },
			{ path: 'e-wallet/deposit-fund', loadComponent: () => import('./pages/e-wallet/deposit-fund/deposit-fund').then(m => m.DepositFund) },
			{ path: 'e-wallet/withdrawal', loadComponent: () => import('./pages/e-wallet/withdrawal/withdrawal').then(m => m.Withdrawal) },
			{ path: 'profile', loadComponent: () => import('./pages/my-profile/my-profile').then(m => m.MyProfile) },
			{ path: 'change-password', loadComponent: () => import('./pages/change-password/change-password').then(m => m.ChangePassword) },
			{ path: 'settings', component: Settings }
		]
	},
];
