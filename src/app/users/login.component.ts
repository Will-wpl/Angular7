import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AllService } from '../service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AllService]
})
export class LoginComponent implements OnInit {
  user_name = '';
  user_password = '';
  name_error = false;
  pass_error = false;
  login_error = false;
  disabled = false;
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private loginService: AllService) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {

  }
  goLogin() {
    if (this.user_name == "") {
      this.name_error = true;
      return;
    } else {
      this.name_error = false;
    }
    if (this.user_password == "") {
      this.pass_error = true;
      return;
    } else {
      this.pass_error = false;
    }
    this.disabled=true;
    this.loginService.login('loginC/login', this.user_name, this.user_password).then(result => {
      //console.log("登录接口返回的信息是：" + JSON.stringify(result));//打印返回的数据
      if (result.code == 200 && result) { // 登录成功
        this.login_error = false;
        this.disabled=false;
        let obj = {
          userId: result.beanModel.userId,
          userName: result.beanModel.userName,
          token: result.tokenSn
        }
        sessionStorage.userId = result.beanModel.userId;
        sessionStorage.userName = result.beanModel.userName;
        sessionStorage.token = result.tokenSn;
        this.onVoted.emit(obj);
        this.router.navigate(['/structure/YB']);
      } else { // 登录失败
        let timeOut;
        this.login_error = true;
        this.disabled=false;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
          this.login_error = false;
        }, 5000)
        console.log(result.msg);
      }
    });
  }
}
