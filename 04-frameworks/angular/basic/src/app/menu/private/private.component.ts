import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-menu-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  userName!: string | null;
  constructor(private authService: AuthService, private router: Router) {
    this.userName = this.authService.getUserName();

    this.userName == null
      ? this.router.navigate(['/'])
      : this.userName = this.userName.substring(0, this.userName.indexOf('@'));
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
