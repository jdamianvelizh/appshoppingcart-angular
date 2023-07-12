import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  baseUrl = 'https://api.escuelajs.co/api/v1/';

  //lista de carrito
  private mylist: Product[] = [];

  //carrito observable
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(private httpClient: HttpClient) {}

  //Para obtener todos los productos del api
  getAllProducts(): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}products`);

    return response;
  }
  //Agregamos un producto a la lista del carrito
  addProduct(product: Product) {
    if (this.mylist.length == 0) {
      product.cantidad = 1;
      this.mylist.push(product);
      this.myCart.next(this.mylist);
    } else {
      const productMod = this.mylist.find((element) => {
        return element.id === product.id;
      });
      if (productMod) {
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.mylist);
      } else {
        product.cantidad = 1;
        this.mylist.push(product);
        this.myCart.next(this.mylist);
      }
    }
  }

  //Para borrar un producto de la lista
  deleteProduct(id: string) {
    this.mylist = this.mylist.filter((product) => {
      return product.id != id;
    });
    this.myCart.next(this.mylist);
  }
  //Buscamos un producto por medio de su Id para retornar un array sin ese producto en especifico
  findProductById(id: string) {
    return this.mylist.find((product) => {
      return product.id === id;
    });
  }
  //Para calcular el total del carrito
  totalCart() {
    const total = this.mylist.reduce(function (acumulaldor, product) {
      return acumulaldor + product.cantidad * product.price;
    }, 0);
    return total;
  }
}
