import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-new',
  templateUrl: './cart-new.component.html',
  styleUrls: ['./cart-new.component.css']
})
export class CartNewComponent implements OnInit {
  public qty:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
