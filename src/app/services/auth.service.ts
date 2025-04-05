import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface RegisterData {
  name: string;
  email: string;
  password: string
}

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  register(data: RegisterData):Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: LoginData):Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  pageProtected():Observable<any> {
    return this.http.get("http://localhost:8080/user", {})
  }
}
