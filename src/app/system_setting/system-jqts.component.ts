import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {systemConfig} from '../util'
@Component({
  selector: 'system-jqts',
  templateUrl: './system-jqts.component.html',
})
export class SystemjqtsComponent implements OnInit {
  pageType='';
  config = systemConfig;
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
}
