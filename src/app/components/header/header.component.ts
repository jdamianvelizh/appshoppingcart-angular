import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  viewCart: boolean = false;

  constructor(){}


  ngOnInit(): void {

  }

  onToggleCart(){
    this.viewCart = !this.viewCart;
  }


}
