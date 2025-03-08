import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.email.endsWith('@organizer.com')) {
      this.authService.login(this.email, this.password);
      this.router.navigate(['/organizer-dashboard']);
    } else {
      this.authService.login(this.email, this.password);
      this.router.navigate(['/shows']);
    }
  }
}