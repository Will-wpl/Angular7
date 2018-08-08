import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'system-show',
  templateUrl: './system-show.component.html',
})
export class SystemshowComponent implements OnInit {
  @Input() data
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {

  }
  returnTitle(title) {
    $(".system_title").html(title);
   }
   returnTxt(txt){
    $(".system_txt").html(txt);
   }
}
