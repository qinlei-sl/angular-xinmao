import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  table: Array<string> = ['上传', '订单'];
  key: number = 0;
  id: any;
  @Output() toParent = new EventEmitter();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  click(index) {
    this.key = index;
    this.toParent.emit(index)
    if (this.key == 0) {
      this.router.navigate(["client"]);
    } else if(this.key == 1) {
      this.router.navigate(["client/1"]);
    }
  }
    
  

}
