import { Component, OnInit } from '@angular/core';

import * as jQuery from '../../js/jquery-3.5.1.min.js';
import * as Webuploader from '../../js/webuploader.min';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  afuConfig: any;
  constructor() { }

  ngOnInit() {
    console.log(jQuery)

    // console.log(Webuploader)
  }

}
