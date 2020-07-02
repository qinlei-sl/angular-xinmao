import { orderData } from './../orderData';
import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderData=orderData;
  dateFormat = 'yyyy/MM/dd';
  dateRange:string[] = [];
  constructor() { }

  ngOnInit() {
    
    console.log(Object.keys(this.orderData[0][0]))

  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
