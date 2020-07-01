import { orderData } from './../orderData';
import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderData;
  constructor() { }

  ngOnInit() {
    console.log(this.orderData)
  }

}
