import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthUser } from '../../../../auth/interfaces/authUser.interface';

@Component({
  selector: 'app-heroes-navbar',
  templateUrl: './heroes-navbar.component.html',
  styleUrl: './heroes-navbar.component.css'
})
export class HeroesNavbarComponent implements OnInit {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public user?: AuthUser;

  public sidebarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'Add', icon: 'add', url: './new-hero' },
    { label: 'Search', icon: 'search', url: './search' }
  ];

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }
}
