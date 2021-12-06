import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { LoginUser } from '../models/LoginUser';

const initialCredentials: LoginUser = {
  email: '',
  password: '',
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: LoginUser = initialCredentials;
  error?: string | null;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit(): void {
    this.error = null;
    const { isValid, error }: { isValid: boolean; error: string } =
      this.authService.login({
        userCredentials: this.user,
      });
    if (isValid) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = error;
    }
  }
}
