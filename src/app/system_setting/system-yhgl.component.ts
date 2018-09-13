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
  table_list=[];
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
