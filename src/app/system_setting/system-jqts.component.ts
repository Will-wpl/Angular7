import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {systemConfig} from '../util'
import * as $ from 'jquery';
@Component({
  selector: 'system-jqts',
  templateUrl: './system-jqts.component.html',
})
export class SystemjqtsComponent implements OnInit {
  pageType='';
  config = systemConfig;
  table_list=[
    {name:"张三",dx:'111',wx:'111',email:'123@qq.com',alarm:"I级",readonly:true},
    {name:"李四",dx:'111',wx:'111',email:'123@qq.com',alarm:"I级",readonly:true},
    {name:"王二",dx:'111',wx:'111',email:'123@qq.com',alarm:"I级",readonly:true},
    {name:"吕健",dx:'111',wx:'111',email:'123@qq.com',alarm:"I级",readonly:true},
  ]
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  doFix(index){
    this.table_list[index].readonly=false;
  }
  doSave(index){
    if(this.table_list[index].email=="" || this.table_list[index].email.indexOf("@")<0){
      return;
    }
    this.table_list[index].readonly=true;
    
  }
  addlist(){
    let obj = {name:"",dx:'',wx:'',email:'',alarm:"",readonly:false,new:"new",email_error:false};
    this.table_list.push(obj);
  }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
}
