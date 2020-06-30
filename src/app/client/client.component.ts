import { Component, OnInit } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  // afuConfig: any;
  constructor() { }

  ngOnInit() {
    // this.afuConfig = {
    //   //上传标题  dragNDrop拖放上传  attachPin连接
    //   theme: 'dragNDrop',
    //   // 隐藏进度栏
    //   hideProgressBar: true,
    //   hideResetBtn: true,
    //   hideSelectBtn: true,
    //   //限制文件大小
    //   maxSize: 1,
    //   uploadAPI: {
    //     url: 'https://slack.com/api/files.upload',

    //     headers: '上传文件'
    //   },
    //   //上传的文件格式
    //   formatsAllowed: " ",
    //   //是否支持上传多个文件
    //   multiple: true,
    // };
  }

}
