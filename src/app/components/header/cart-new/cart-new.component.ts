import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-cart-new',
  templateUrl: './cart-new.component.html',
  styleUrls: ['./cart-new.component.css']
})
export class CartNewComponent implements OnInit {
  public qty:number = 1;

  constructor(public share:ShareService) { }

  ngOnInit(): void {
  //  this.qty = this.share.count;
  }

}
