import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type UserRole = 'admin' | 'client';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['client' as UserRole, Validators.required],
  });

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const formValue = this.loginForm.getRawValue();
    const role = formValue.role;

    localStorage.setItem('userRole', role);
    localStorage.setItem('auth_token', 'demo-token');

    if (role === 'admin') {
      this.router.navigate(['/admin-dashboard']);
      return;
    }

    this.router.navigate(['/client-dashboard']);
  }
}
