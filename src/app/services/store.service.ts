import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  baseUrl = 'https://api.escuelajs.co/api/v1/';

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllProducts(): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}products`)

    return response
  }

  
}
