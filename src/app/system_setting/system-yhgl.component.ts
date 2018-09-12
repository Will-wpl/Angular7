import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {systemConfig} from '../util'
import { AllService } from '../service/service';
@Component({
  selector: 'system-yhgl',
  templateUrl: './system-yhgl.component.html',
})
export class SystemyhglComponent implements OnInit {
  token = sessionStorage.token ? sessionStorage.token : '';
  pageType='';
  config = systemConfig;
  table_list=[
    {name:"张三",password:'111',role:'111',xk:'123@qq.com',readonly:true},
    {name:"李四",password:'111',role:'111',xk:'123@qq.com',readonly:true},
    {name:"王二",password:'111',role:'111',xk:'123@qq.com',readonly:true},
    {name:"吕健",password:'111',role:'111',xk:'123@qq.com',readonly:true},
  ]
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private getData:AllService) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    this.getData.selUser('userC/selUser', this.token).then(result => {
      console.log(result);
    });
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
