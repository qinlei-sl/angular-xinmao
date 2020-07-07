import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  orderDetails: any = [];
  orderKey: number = 1;
  constructor(
    public clientService: ClientService
  ) { }

  ngOnInit() {
    //拿到点击请求过来的详情数据
    this.orderDetails = this.clientService.details
    console.log(this.clientService.details)
  }


}
