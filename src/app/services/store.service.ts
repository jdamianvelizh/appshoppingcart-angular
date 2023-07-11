import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  baseUrl = 'https://api.escuelajs.co/api/v1/';

  //lista de carrito
  private mylist: Product[] = [];

//carrito observable
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();


  constructor(
    private httpClient: HttpClient
  ) { }


  getAllProducts(): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}products`)

    return response
  }

  addProduct(product:Product){
      this.mylist.push(product)
      this.myCart.next(this.mylist)
  }


  
}
