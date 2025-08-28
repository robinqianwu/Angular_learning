import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RandomTableComponent } from './components/testComponents/random-table/random-table.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  headerText: string = "This is a text value from app.component.ts";
  
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
