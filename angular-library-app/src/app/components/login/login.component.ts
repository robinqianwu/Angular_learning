import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <h2>登录</h2>
        
        <div class="form-group">
          <label for="username">用户名</label>
          <input 
            id="username" 
            type="text" 
            formControlName="username" 
            class="form-control"
            [class.is-invalid]="username?.invalid && username?.touched"
          />
          <div class="invalid-feedback" *ngIf="username?.invalid && username?.touched">
            用户名是必填项
          </div>
        </div>

        <div class="form-group">
          <label for="password">密码</label>
          <input 
            id="password" 
            type="password" 
            formControlName="password" 
            class="form-control"
            [class.is-invalid]="password?.invalid && password?.touched"
          />
          <div class="invalid-feedback" *ngIf="password?.invalid && password?.touched">
            密码是必填项
          </div>
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid">
          登录
        </button>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .form-group {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    .form-control {
      width: 100%;
      padding: 0.375rem 0.75rem;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    }

    .btn {
      width: 100%;
      padding: 0.5rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
    }

    .btn:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .invalid-feedback {
      color: #dc3545;
      font-size: 80%;
      margin-top: 0.25rem;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.value.username,
        this.loginForm.value.password
      ).subscribe({
        next: () => {
          this.router.navigate(['/books']);
        },
        error: error => {
          console.error('Login failed:', error);
          // 这里可以添加错误处理，比如显示错误消息
        }
      });
    }
  }
}
