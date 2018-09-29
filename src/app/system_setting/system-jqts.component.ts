import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {systemConfig} from '../util'
import * as $ from 'jquery';
import { AllService } from '../service/service';
@Component({
  selector: 'system-jqts',
  templateUrl: './system-jqts.component.html',
})
export class SystemjqtsComponent implements OnInit {
  token = sessionStorage.token ? sessionStorage.token : '';
  pageType='';save_disabled=false;
  config = systemConfig;
  table_list=[];save_list=[];
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private getData:AllService) { }
  doFix(index){
    this.table_list[index].readonly=false;
  }
  doSave(index){
    if(this.table_list[index].email=="" || this.table_list[index].email.indexOf("@")<0){
      return;
    }
    let obj = this.save_list[index];
    delete obj.readonly;
    this.save_disabled=true;
    let alermLvl = obj.alermLvl.filter((its)=>{
      return its.checked == true;
    }).map((l)=>{
      return l.lv;
    })
    obj.alermLvl = alermLvl;
    console.log(obj);
    this.getData.add('userC/add', this.token,obj).then(result => {
      if(result.code == 200){
        this.save_disabled=false;
        this.table_list[index].readonly=true;
        this.refresh();
      }else{
        
      }
    })
  }
  selectChange(val,index,alermIndex){
    if(val.target.checked){
      this.table_list[index].alermLvl[alermIndex].checked=true;
    }else{
      this.table_list[index].alermLvl[alermIndex].checked=false; 
    }
  }
  addlist(){
    let obj = {userName:"",duanxin:'',weixin:'',email:'',alermLvl:[],readonly:false,new:"new"};
    this.table_list.push(obj);
  }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    this.refresh();
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
  refresh(){
    this.getData.selUser('userC/selUser', this.token).then(result => {
      if(result.beanModel){
        result.beanModel.map((item,index)=>{
          item.alermLvl.map((it,k)=>{
            item.alermLvl[k] = {lv:it,checked:true}
          })
          item.readonly=true;
          this.table_list[index]=item;
          this.save_list[index]=item;
        })
      }
    });
  }
}
