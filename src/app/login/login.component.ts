
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { AccountService } from '../server/account.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  height: any;
  form: FormGroup;
  returnUrl: any;
  //账号密码判断
  account: Boolean;
  //定义判断是否按下登录按钮
  flag: Boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private jsonp: JsonpClientBackend,
    private accountService:AccountService
  ) { }


  ngOnInit() {
    // this.height = `height:"${document.body.clientHeight}px"`
    // console.log(document.body.clientHeight)

    //判断输入内容
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.form.controls; }

  onSubmit() {
    //按钮按下
    this.flag = true;
    setTimeout(() => {
      this.flag = false;
    }, 5000);
    this.flag = true;
    var username:string = this.f.username.value
    var password: string = this.f.password.value;
    var url:string = "http://localhost:3000/login"
    this.accountService.login(username, password, url)
    this.account = this.accountService.accountFun()
  }

}
