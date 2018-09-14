import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {SupportshowComponent} from './support_show/support-show.component'
import {supportConfig} from '../util'
@Component({
  selector: 'support-main',
  templateUrl: './support-main.component.html',
})
export class SupportmainComponent implements OnInit {
  pageType='';
  config = supportConfig;
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  ngOnInit(): void {
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
}
