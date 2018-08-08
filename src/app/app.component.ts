import { Component, OnInit,Input } from '@angular/core';
import { NAVLIST } from './service/mock-heroes';
import { Router } from '@angular/router';
import { LoginComponent } from './users/login.component';
import { ModalComponent } from './modal/modal.component';
import { AllService } from './service/service';
import { writeCurrentDate } from './util';
@Component({
  selector: 'my-app',
  template: `<my-login *ngIf="userId==''" (onVoted)="onListen($event)" ></my-login>
              <div class="wapper" *ngIf="userId!=''">
              <header class="header">
                <div class="header_top">
                  <h1 class="logo"><a href='#'></a></h1>
                  <ul>
                    <li class="user">欢迎，{{userName}}</li><li>{{thisTime}}</li>
                    <li class="skin"></li>
                    <li class="goOut" data-toggle="modal" data-target=".bs-example-modal-sm"></li>
                  </ul>
                </div>
                <nav>
                  <a *ngFor="let item of navlist" routerLink={{item.url}} class={{item.selected}} (click)="goPage(item.id)">{{item.name}}</a>
                </nav>
                <div class="show_police" *ngIf="show_police"><span>一级警情</span><span>航站楼东侧出现故障</span><span>2018-09-25 11:33:22</span><abbr>请相关部门紧急处理</abbr></div>
              </header>
              <my-dashboard [page]="page" [left_menus]="left_menus"></my-dashboard>
              <modal [text]="modal_text"></modal>
            </div>
  `,
  providers:[AllService]
})
export class AppComponent implements OnInit {
  userId=sessionStorage.userId?sessionStorage.userId:'';
  userName=sessionStorage.userName?sessionStorage.userName:'';
  token=sessionStorage.token?sessionStorage.token:'';
  page = 1;thisTime=writeCurrentDate();
  left_menus=[];
  res_menus=[];
  show_police=false;
  selected = 'active';
  navlist = NAVLIST;
  modal_text="确认退出当前账号吗？";
  timer;
  constructor(
    private _router: Router,
    private getMenus:AllService
  ) { }
  ngOnInit(): void {
    if(this.userId!=''){
      this.refresh();
    }
    this.timer = setInterval(() => {
      this.thisTime = writeCurrentDate()
    }, 1000)
  }
  refresh(){
    this.getMenus.getMenus('menuC/getPermission',this.token, this.userId).then(result => {
      //console.log("登录接口返回的信息是：" + JSON.stringify(result));//打印返回的数据
      if (result.code == 200 && result) { // 登录成功
        //console.log(result);
        this.res_menus=result.beanModel;
        const navlist = [];
        result.beanModel.map((it,i)=>{
            let navObj = {name:it.text,selected:i==0?'active':'',id:i,url:it.permissionUrl}
            navlist.push(navObj);
        })
        //console.log(navlist);
        this.navlist = navlist;
        if(this._router.url.indexOf('MAIN')>0){
          this.goPage(0);
        }
        if(this._router.url.indexOf('structure')>0){
          this.goPage(4);
        }
        if(this._router.url.indexOf('environment')>0){
          this.goPage(3);
        }
        if(this._router.url.indexOf('dataanalysis')>0){
          this.goPage(5);
        }
        if(this._router.url.indexOf('systemoverview')>0){
          this.goPage(1);
        }
      } else { // 登录失败
        console.log(result.msg);
      }
    });
  }
  goOut(){
    this.userId='';
    this.userName='';
    this.token='';
    sessionStorage.clear();
  }
  onListen(obj){
    console.log(obj);
    this.userId=obj.userId;
    this.userName=obj.userName;
    this.refresh();
  }
  goPage(index): void {
    this.navlist.map((item) => {
      if (index === item.id) {
        item.selected = 'active'
      } else {
        item.selected = ''
      }
    })
    this.page = index;
    this.left_menus=this.res_menus.length>0?this.res_menus[index].children:[];
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
