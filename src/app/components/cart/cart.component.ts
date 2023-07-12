import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  myCart$ = this.StoreService.myCart$;

  constructor(private StoreService: StoreService) {}

  ngOnInit(): void {}
  //Calcular el total a pagar de un producto
  totalProduct(price: number, units: number) {
    return price * units;
  }
  //Eliminar de la lista de productos un elemento
  deleteProduct(id: string) {
    this.StoreService.deleteProduct(id);
  }
  //Funcionalidad de los botones mas y menos del carrito
  updateUnits(operation: string, id: string) {
    const product = this.StoreService.findProductById(id);
    if (product) {
      if (operation == 'minus' && product.cantidad > 0) {
        product.cantidad = product.cantidad - 1;
      }
      if (operation == 'add') {
        product.cantidad = product.cantidad + 1;
      }
      if (product.cantidad === 0) {
        this.StoreService.deleteProduct(id);
      }
    }
  }
  totalCart() {
    const result = this.StoreService.totalCart();
    return result;
  }
}
