import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Layout } from '../layout';

declare var bootstrap: any;

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
    
    // Clear auth state (tokens, user info)
    localStorage.removeItem('auth_token');
    
    // Redirect user to login screen
    this.router.navigate(['/login']);
  }
}
