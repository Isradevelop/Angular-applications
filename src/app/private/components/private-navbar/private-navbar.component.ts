import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthUser } from '../../../auth/interfaces/authUser.interface';

@Component({
  selector: 'app-private-navbar',
  templateUrl: './private-navbar.component.html',
  styleUrl: './private-navbar.component.css'
})
export class PrivateNavbarComponent {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public user?: AuthUser;

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
