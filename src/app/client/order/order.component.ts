import { orderData } from './../orderData';
import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderData: any = orderData;
  orderKey: number = 1;
  dateRange: string[] = [];
  design = orderData.design;
  package = orderData.package

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    // console.log(this.design)
  }
  onChange(result: Date): void {
    // console.log('onChange: ', result);
  }
  //接受子组件数据
  childData(value) {
    this.orderData.design[2].data.push(...value)
  }
}
