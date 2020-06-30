import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  account: Boolean;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
) { }

  login(username, password,url) {

    return this.http.get(url).subscribe((data) => {
      // 如果请求成功运行此代码
      if (username == data[0].username && password == data[0].password) {
        console.log("登录成功")
        this.account = false;
        //判断成功跳转页面
        this.router.navigate(['../client'], { relativeTo: this.route });
      } else {
        this.account = true;
      }
    }, function (err) {
      // 如果请求失败运行此代码
        console.log(err)
    })
  }
  accountFun() {
    return this.account
  }
}

