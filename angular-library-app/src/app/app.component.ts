import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: false,
    template: `
    <div class="app-container">
      <nav class="navbar" *ngIf="isLoggedIn">
        <div class="nav-brand">图书管理系统</div>
        <button class="nav-button" (click)="logout()">退出</button>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
    styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .navbar {
      background-color: #333;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .nav-button {
      background-color: #666;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .nav-button:hover {
      background-color: #555;
    }
  `]
})
export class AppComponent {
    get isLoggedIn(): boolean {
        return !!localStorage.getItem('currentUser');
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
    }
}
