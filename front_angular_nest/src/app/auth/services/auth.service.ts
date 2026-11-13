import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.urlServidor;

  loginConNest(credentials: LoginCredentials): Observable<unknown> {
    return this.http.post<unknown>(`${this.baseUrl}/auth/login`, credentials);
  }
}
