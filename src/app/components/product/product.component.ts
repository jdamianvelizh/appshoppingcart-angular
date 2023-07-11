import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[]= [];


  constructor(
    private StoreService: StoreService
  ){

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.StoreService.getAllProducts().subscribe((data) =>{
      return this.products = data;
    })
  }

  addToCart(product:Product){
    return this.StoreService.addProduct(product)
  }

}
