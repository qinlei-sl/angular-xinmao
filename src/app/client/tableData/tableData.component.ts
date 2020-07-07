import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-tableData',
  templateUrl: './tableData.component.html',
  styleUrls: ['./tableData.component.css']
})
export class TableDataComponent implements OnInit {
  // 接受数据
  parnentdata: any;
  col: number;
  // 时间格式
  dateFormat = 'yyyy/MM/dd';
  // 接受父级传的值
  @Input()
  set tableData(text: string) {
    this.parnentdata = !text ? "啥都没有给我" : text;
  };

  @Output() child = new EventEmitter();
  constructor(
    public clientService: ClientService,
    public router:Router
  ) { }

  ngOnInit() {
    this.col = 24/this.parnentdata.length
  }
  ngOnChanges() {
    
  }
  // 单个下载
  down(data) {
    this.child.emit(this.parnentdata[1].data.splice(data, 1))
  }
  // 下载所有
  downAll() {
    this.child.emit(this.parnentdata[1].data)
    this.parnentdata[1].data = []
  }
  //点击发送数据给详情页面
  details(index, key) {
    this.router.navigate(["client/1/details"])
    this.clientService.orderDetails(this.parnentdata,index,key)
  }
}
