import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLogin: string = "userLogin";

  constructor() { }

  public login(user: User): boolean {
    const { userName, password } = user;

    if (userName === "master8@lemoncode.net" && password === "12345678") {
      localStorage.setItem(this.userLogin, userName);
      return true;
    }

    return false;
  }

  public logout(): void {
    localStorage.removeItem(this.userLogin);
  }

  public isLogged(): Observable<boolean> {
    return of(localStorage.getItem(this.userLogin) != null);
  }

  public getUserName(): string | null {
    return localStorage.getItem(this.userLogin);
  }

}
