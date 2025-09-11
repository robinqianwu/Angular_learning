import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="error-container">
      <h1>404</h1>
      <h2>页面未找到</h2>
      <p>抱歉，您访问的页面不存在。</p>
      <button class="btn btn-primary" routerLink="/">返回首页</button>
    </div>
  `,
  styles: [`
    .error-container {
      text-align: center;
      padding: 50px 20px;
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      font-size: 72px;
      color: #e74c3c;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
    }

    p {
      color: #666;
      margin-bottom: 30px;
    }

    .btn {
      padding: 10px 20px;
      font-size: 16px;
    }
  `]
})
export class ErrorPageComponent {}
