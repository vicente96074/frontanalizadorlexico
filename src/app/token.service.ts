import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private baseUrl = 'http://localhost:8080'; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) {}

  getTokens(): Observable<any[]> {
    const url = `${this.baseUrl}/api/tokens`; // Cambia esto a tu endpoint real
    return this.http.get<any[]>(url);
  }
}
