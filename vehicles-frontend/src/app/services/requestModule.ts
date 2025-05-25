import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestModule {
  private baseUrl = 'http://localhost:3000/vehicles';

  constructor(private http: HttpClient) {}

  doRequest<T>(method: 'get' | 'post' | 'patch' | 'delete', uri: string, data?: any): Observable<T> {
    const url = `${this.baseUrl}${uri}`;

    switch (method) {
      case 'get':
        return this.http.get<T>(url);
      case 'post':
        return this.http.post<T>(url, data);
      case 'patch':
        return this.http.patch<T>(url, data);
      case 'delete':
        return this.http.delete<T>(url);
      default:
        throw new Error(`Método HTTP não suportado: ${method}`);
    }
  }
}
