import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {systemConfig} from '../util'
@Component({
  selector: 'system-yhgl',
  templateUrl: './system-yhgl.component.html',
})
export class SystemyhglComponent implements OnInit {
  pageType='';
  config = systemConfig;
  table_list=[
    {name:"张三",password:'111',role:'111',xk:'123@qq.com',readonly:true},
    {name:"李四",password:'111',role:'111',xk:'123@qq.com',readonly:true},
    {name:"王二",password:'111',role:'111',xk:'123@qq.com',readonly:true},
    {name:"吕健",password:'111',role:'111',xk:'123@qq.com',readonly:true},
  ]
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
  doFix(index){
    this.table_list[index].readonly=false;
  }
  doSave(index){
    this.table_list[index].readonly=true;
  }
}
