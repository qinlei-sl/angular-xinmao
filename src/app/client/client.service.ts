import { Injectable } from '@angular/core';
import { WebUploaderComponent } from 'ngx-webuploader';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../moder/oreder';
import { orderData } from './orderData';


declare const $: any;
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private orderSubject: BehaviorSubject<Order>;
  //Observable<Order> 可观察对象 一般用于传值
  public order: Observable<Order>;
  detailsKey: number;
  constructor() { 
    this.orderSubject = new BehaviorSubject<Order>(JSON.parse(localStorage.getItem('details')))
    this.order = this.orderSubject.asObservable()
  }

//订单详情数据交互
  orderDetails(parnentdata, index, key) {
    localStorage.setItem('details', JSON.stringify([parnentdata[index].title, parnentdata[index].data[key]]))
    this.orderSubject = new BehaviorSubject<Order>(JSON.parse(localStorage.getItem('details')))
    this.order = this.orderSubject.asObservable()
  }
  public get details(): any {
    return this.orderSubject.value;
  }
}
