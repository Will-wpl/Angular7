import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'support-show',
  templateUrl: './support-show.component.html',
})
export class SupportshowComponent implements OnInit {
  pageType='';
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  @Input() data
  constructor(private router: Router) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
}
