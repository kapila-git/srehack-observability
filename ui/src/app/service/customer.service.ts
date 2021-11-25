import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../entity/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl =  'http://localhost:3333';

  constructor(private http: HttpClient) { }

  createCustomer(data: any): Observable<object> {
    return this.http.post(this.baseUrl, data);
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  deleteCustomer(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3333/${id}`);
  }
}
