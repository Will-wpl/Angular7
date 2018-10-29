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
  config = systemConfig;hasAlermLvl=[];
  table_list=[];
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private getData:AllService) { }
  doFix(index){
    this.table_list[index].readonly=false;
  }
  doCancel(index){
    this.table_list[index].readonly = true;
    this.refresh();
  }
  doSave(index){
    if(this.table_list[index].email=="" || this.table_list[index].email.indexOf("@")<0){
      return;
    }
    let obj = this.table_list[index];
    delete obj.readonly;
    if(obj.alermLvl.substr(0,1)===","){
      obj.alermLvl = obj.alermLvl.replace(",","");
    }
    this.save_disabled=true;
    //console.log(obj);
    this.getData.add('userC/add', this.token,obj).then(result => {
      if(result.code == 200){
        this.save_disabled=false;
        this.table_list[index].readonly=true;
        this.refresh();
      }else{
        
      }
    })
  }
  selectChange(val,index,alermLv,parmIndex){
    if(val.target.checked){
      let arry = this.table_list[index].alermLvl.split(",");
      arry.push(alermLv);
      this.table_list[index].alermLvl = arry.join(",");
      this.table_list[index].parm[parmIndex].checked=true;
    }else{
      let arry = this.table_list[index].alermLvl.split(",");
      let n = arry.findIndex(j=>{return j==alermLv})
      arry.splice(n,1);
      this.table_list[index].alermLvl = arry.join(",");
      this.table_list[index].parm[parmIndex].checked=false; 
    }
  }
  addlist(){
    let obj = {userName:"",duanxin:'',weixin:'',email:'',alermLvl:"",parm:[],readonly:false,new:"new"};
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
      this.getData.getAlermLvl('userC/getAlermLvl', this.token).then(res => {
          this.hasAlermLvl=res.beanModel;
          if(result.beanModel){
            result.beanModel.map((item,index)=>{
              if(item.parm){
                item.list=[];
                let alermLvl = [];
                this.hasAlermLvl.map((it,k)=>{
                  item.list.push({name:it.name,checked:false,id:it.id});
                  if(item.parm[k]){alermLvl.push(item.parm[k].id);}
                  let check = item.parm.some(r=>{return it.id == r.id});
                  //console.log("第"+(index+1)+"行 : "+check);
                  if(check){
                    item.list[k].checked = true;
                  }else{
                    item.list[k].checked = false;
                  }
                  // if(item.parm[k]){
                  //   if(item.parm[k].id == it.id){
                  //     item.list[k].checked = true;
                  //   }else{
                  //     item.list[k].checked = false;
                  //   }
                  // }else{
                  //   item.list[k].checked = false;
                  // }
                })
                item.alermLvl = alermLvl.join(",");
              }
              item.readonly=true;
              this.table_list[index]=item;
            })
          }
      })
    });
  }
}
