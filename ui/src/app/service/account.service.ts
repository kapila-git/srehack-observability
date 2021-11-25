import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../entity/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl =  'http://localhost:2222';

  constructor(private http: HttpClient) { }

  createAccount(data: any): Observable<object> {
    return this.http.post(this.baseUrl, data);
  }

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }

  deleteAccount(id: any): Observable<any> {
    return this.http.delete(`http://localhost:2222/${id}`);
  }
}
