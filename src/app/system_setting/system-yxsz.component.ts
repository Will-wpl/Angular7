import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {systemConfig} from '../util'
import * as moment from 'moment';
@Component({
  selector: 'system-yxsz',
  templateUrl: './system-yxsz.component.html',
})
export class SystemyxszComponent implements OnInit {
  pageType='';
  config = systemConfig;
  selectedMoments = [];
  timing=true;interval=true;checked=true;
  selectedNow = moment()
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  ngOnChanges(): void {

  };
  checkrun(type,obj){
    let checked = obj.target.checked;
    if(checked){
      switch(type){
            case 'run':this.timing=true;this.interval=true;checked=true
            break;
            case 'timing':this.timing=false;this.interval=true;checked=false
            break;
            case 'interval':this.timing=true;this.interval=false;checked=false
            break;
        }
    }
  }
  ngOnInit(): void {
    this.selectedMoments=[moment(),moment()];
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
}
