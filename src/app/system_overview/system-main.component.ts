import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {SystemshowComponent} from './system_show/system-show.component'
import {SystemchangeComponent} from './system_show/system-change.component'
import {systemConfig} from '../util'
@Component({
  selector: 'system-main',
  templateUrl: './system-main.component.html',
})
export class SystemmainComponent implements OnInit {
  pageType='';
  config = systemConfig;
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  ngOnChanges(): void {

  };
  redefault(list){
    list.map((item,index)=>{index == 0 ? item.active="active":item.active=""})
  }
  ngOnInit(): void {
    this.redefault(this.config.CDXX.list);
    this.redefault(this.config.XTLJ.list);
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
}
