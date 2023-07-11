import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  myCart$ = this.StoreService.myCart$;


  constructor(
    private StoreService: StoreService
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
