import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../data/product';
import { Customer } from './customer';
import { Order } from './order';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  products = 'api/products';
  customers = 'api/customers';
  orders = 'api/orders';

  products$ = this.http.get<Product[]>('api/products');
  customers$ = this.http.get<Customer[]>('api/customers');
  orders$ = this.http.get<Order[]>('api/orders');

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.products).pipe(
      tap(data => data),
    )
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customers).pipe(
      tap(data => data),
    )
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orders).pipe(
      tap(data => data),
    )
  }
}
