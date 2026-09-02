import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Layout } from '../layout';

declare var bootstrap: any;

type UserRole = 'admin' | 'client';

type MenuItem = {
  label: string;
  route: string;
  icon: string;
};

type ClientNavItem = {
  title: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  isPrimary?: boolean;
  isExpanded?: boolean;
};

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  @ViewChild('logoutModal') logoutModalElement!: ElementRef;

  private modalInstance: any;
  private router = inject(Router);
  layoutService = inject(Layout);

  readonly role: UserRole = (localStorage.getItem('userRole') as UserRole) === 'admin' ? 'admin' : 'client';

  readonly menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/admin-dashboard', icon: 'bi-grid-1x2-fill' },
    { label: 'Users', route: '/users', icon: 'bi-people-fill' },
    { label: 'Closing', route: '/closing', icon: 'bi-file-earmark-text-fill' },
    { label: 'Zero Pin', route: '/zero-pin', icon: 'bi-shield-lock-fill' },
    { label: 'Withdrawals', route: '/withdrawals', icon: 'bi-cash-stack' },
    { label: 'Support', route: '/support', icon: 'bi-headset' },
    { label: 'Withdrawal Block', route: '/withdrawal-block', icon: 'bi-slash-circle' },
    { label: 'Rewards', route: '/rewards', icon: 'bi-gift-fill' },
    { label: 'Deposit Address', route: '/deposit-address', icon: 'bi-wallet2' }
  ];

  readonly clientNavItems: ClientNavItem[] = [
    { title: 'Dashboard', route: '/client-dashboard', icon: 'bi-house-door-fill', isPrimary: true },
    {
      title: 'Account', icon: 'bi-person-fill', children: [
        { label: 'Profile', route: '/profile', icon: 'bi-person-fill' },
        { label: 'Change Password', route: '/change-password', icon: 'bi-key-fill' }
      ]
    },
    {
      title: 'E-Wallet', icon: 'bi-wallet2', children: [
        { label: 'Buy Package', route: '/e-wallet/buy-package', icon: 'bi-file-earmark-text-fill' },
        { label: 'Deposit Fund', route: '/e-wallet/deposit-fund', icon: 'bi-file-earmark-text-fill' },
        { label: 'Withdrawal', route: '/e-wallet/withdrawal', icon: 'bi-wallet2' },
      ]
    },
    {
      title: 'Reports', icon: 'bi-arrow-up-circle-fill', children: [
        { label: 'Income Wallet', route: '/reports/income', icon: 'bi-file-earmark-text-fill' },
        { label: 'Wallet Report', route: '/reports/wallet', icon: 'bi-file-earmark-text-fill' },
      ]
    },
    {
      title: 'Community', icon: 'bi-people-fill', children: [
        { label: 'All Team', route: '/team/all', icon: 'bi-people-fill' },
        { label: 'Level List', route: '/team/level-list', icon: 'bi-person-lines-fill' },
        { label: 'Referral Tree', route: '/team/referral-tree', icon: 'bi-diagram-3-fill' }
      ]
    },
    {
      title: 'Earning', icon: 'bi-download', children: [
        { label: 'Club Bonus', route: '/earning/club-bonus', icon: 'bi-plus-circle' },
        { label: 'Reward Income', route: '/earning/reward-income', icon: 'bi-plus-circle' },
        { label: 'Staking Bonus', route: '/earning/staking-bonus', icon: 'bi-plus-circle' },
        { label: 'Staking Level Bonus', route: '/earning/staking-level-bonus', icon: 'bi-plus-circle' }
      ]
    },
    {
      title: 'Support',
      icon: 'bi-headset',
      children: [
        { label: 'Create Ticket', route: '/support/create-ticket', icon: 'bi-plus-circle' },
        { label: 'View Ticket', route: '/support/view-ticket', icon: 'bi-list-ul' },
      ]
    }
  ];

  toggleDropdown(item: ClientNavItem): void {
    const isOpen = this.isDropdownOpen(item);

    if (!isOpen) {
      this.clientNavItems.forEach((navItem) => {
        if (navItem.children) {
          navItem.isExpanded = false;
        }
      });
    }

    item.isExpanded = !isOpen;
  }

  isDropdownOpen(item: ClientNavItem): boolean {
    return item.isExpanded ?? this.isMenuActive(item);
  }

  private isMenuActive(item: ClientNavItem): boolean {
    return item.children?.some((child) => this.router.isActive(
      this.router.createUrlTree([child.route]),
      { paths: 'subset', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' }
    )) ?? false;
  }

  openLogoutModal(): void {
    if (!this.modalInstance) {
      this.modalInstance = new bootstrap.Modal(this.logoutModalElement.nativeElement);
    }
    this.modalInstance.show();
  }

  closeLogoutModal(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  confirmLogout(): void {
    this.closeLogoutModal();
    localStorage.removeItem('auth_token');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }
}
