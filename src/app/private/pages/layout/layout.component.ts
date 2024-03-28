import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

}
