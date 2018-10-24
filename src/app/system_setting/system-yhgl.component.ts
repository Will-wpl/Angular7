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
  pageType='';role_list=[];
  config = systemConfig;
  table_list=[];save_disabled=false;
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private getData:AllService) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    this.getData.selUser('userC/selUser', this.token).then(result => {
      console.log(result);
      if (result.beanModel) {
        result.beanModel.map((item,index)=>{
          item.readonly=true;
          this.table_list[index]=item;
        })
      }
      this.getData.selRole('userC/selRole', this.token).then(res=>{
        if (res.beanModel) {
          this.role_list=res.beanModel
        }
      })
    });
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
  doFix(index){
    this.table_list[index].readonly=false;
  }
  roleChange(val,index){
    this.table_list[index].roleId = val;
  }
  selectChange(val,index){
    this.table_list[index].delFlg = val;
  }
  doCancel(index){
    this.table_list[index].readonly = true;
  }
  doSave(index){
    let obj = this.table_list[index];
    delete obj.readonly;
    this.save_disabled=true;
    this.getData.add('userC/save', this.token,obj).then(result => {
      if(result.code == 200){
        this.save_disabled=false;
        this.table_list[index].readonly=true;
      }else{
        
      }
    })
  }
}
