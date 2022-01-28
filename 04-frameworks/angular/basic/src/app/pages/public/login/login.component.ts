import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm!: FormGroup;
  userNameControl!: FormControl;
  passwordControl!: FormControl;
  isLogginError!: boolean;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.user = {
      userName: '',
      password: ''
    }

    this.createLoginForm();
  }

  ngOnInit(): void {
  }

  createLoginForm() {
    this.userNameControl = new FormControl('', [Validators.required]);
    this.passwordControl = new FormControl('', [Validators.required]);

    this.loginForm = this.formBuilder.group({
      userName: this.userNameControl,
      password: this.passwordControl
    });
  }

  submitLogin() {
    if (!this.loginForm.valid) return;

    this.user.userName = this.userNameControl.value;
    this.user.password = this.passwordControl.value;

    this.authService.login(this.user)
      ? this.router.navigate(['/dashboard'])
      : this.isLogginError = true;
  }

}
