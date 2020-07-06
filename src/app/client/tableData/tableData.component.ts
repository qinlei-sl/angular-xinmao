import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-tableData',
  templateUrl: './tableData.component.html',
  styleUrls: ['./tableData.component.css']
})
export class TableDataComponent implements OnInit {
  parnentdata: any;
  dateFormat = 'yyyy/MM/dd';
  @Input()
  set tableData(text: string) {
    this.parnentdata = !text ? "啥都没有给我" : text;
  };
  @Output() child = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log(this.parnentdata)
  }
  ngOnChanges() {
    
  }
  down(data) {
    this.child.emit(this.parnentdata[1].data.splice(data, 1))
  }
  downAll() {
    this.child.emit(this.parnentdata[1].data)
    this.parnentdata[1].data = []
  }
}
