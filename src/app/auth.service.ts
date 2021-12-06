import { Injectable } from '@angular/core';
import { LoginUser } from './models/LoginUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login({ userCredentials }: { userCredentials: LoginUser }) {
    const { email, password } = userCredentials;
    if (email === 'rammanohar@inncrewin.com' && password === 'Inncrewin123') {
      return {
        isValid: true,
        error: '',
      };
    } else {
      return {
        isValid: false,
        error: 'Invalid email or password',
      };
    }
  }
}
