import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RandomTableComponent } from './components/test-components/random-table/random-table.component';

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

  @Input() headerText: string = "This is a text value from app.component.ts";

  headerInputText: string = "A given title from app.component.ts headerInputText";
  
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  //handle event from child component
  handleNewData(event: string) {
    console.log("Received event from RandomTableComponent:", event);
  }
}
