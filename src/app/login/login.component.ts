import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

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
  account:Boolean;
  //定义判断是否按下登录按钮
  flag:Boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private jsonp: JsonpClientBackend
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
    var username:string = this.f.username.value
    var password: string = this.f.password.value;
    var url:string = "http://localhost:3000/login"

    this.http.get(url).subscribe( (data)=>{
      // 如果请求成功运行此代码
      if (username == data[0].username && password == data[0].password) {
        this.account = false;
        console.log("成功跳转")
        //判断成功跳转页面
        this.router.navigate(['../client'], { relativeTo: this.route });
      } else {
        this.account = true
      }
    }, function (err) {
      // 如果请求失败运行此代码
      console.log(err)
    })
    console.log(this.account)
    console.log(this.f.username.value, this.f.password.value, this.f.username.errors)
  }

}
