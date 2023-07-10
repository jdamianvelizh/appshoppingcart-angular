import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private StoreService: StoreService
  ){}

  ngOnInit(): void {
    this.StoreService.getAllProducts().subscribe((data)=>{
      this.products = data
      console.log(this.products);
    })
  }
}
