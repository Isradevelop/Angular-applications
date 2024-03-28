import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public hasError: boolean = false;

  onClick(email: string, password: string) {
    if (email != 'john.due@gmail.com' || password != '1234') {
      this.hasError = true;
      return;
    }

    this.authService.login(email, password)
      .subscribe(user => this.router.navigateByUrl('/'))
  }
}
