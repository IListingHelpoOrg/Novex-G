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

  readonly menuItems: MenuItem[] = this.role === 'admin'
    ? [
      { label: 'Dashboard', route: '/admin-dashboard', icon: 'bi-grid-1x2-fill' },
      { label: 'Users', route: '/users', icon: 'bi-people-fill' },
      { label: 'Closing', route: '/closing', icon: 'bi-file-earmark-text-fill' },
      { label: 'Zero Pin', route: '/zero-pin', icon: 'bi-shield-lock-fill' },
      { label: 'Withdrawals', route: '/withdrawals', icon: 'bi-cash-stack' },
      { label: 'Support', route: '/support', icon: 'bi-headset' },
      { label: 'Withdrawal Block', route: '/withdrawal-block', icon: 'bi-slash-circle' },
      { label: 'Rewards', route: '/rewards', icon: 'bi-gift-fill' },
      { label: 'Deposit Address', route: '/deposit-address', icon: 'bi-wallet2' }
    ]
    : [
      { label: 'Dashboard', route: '/client-dashboard', icon: 'bi-grid-1x2-fill' },
      { label: 'Profile', route: '/profile', icon: 'bi-person-circle' },
      { label: 'Settings', route: '/settings', icon: 'bi-gear-fill' },
    ];

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
