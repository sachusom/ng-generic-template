/**
 * @author VishnuSomanath
 * @version 1.0.0
 * @return {void}
 * @example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConfig } from '../configs';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) { }

  authenticateUser(): Observable<any> {
    return this.communicationService.get<any>('')
      .pipe(
        tap((response) => {
          if (response.data) {
            localStorage.setItem(AppConfig.localStorage.authtokenKey, response.data.token);
          }
        }));
  }

  isLoggedIn(): boolean {
    return true;
  }

  logout(): void {
    localStorage.removeItem(AppConfig.localStorage.authtokenKey);
    this.router.navigate(['/auth/login']);
  }
}
