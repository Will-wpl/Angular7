import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'system-change',
  templateUrl: './system-change.component.html',
})
export class SystemchangeComponent implements OnInit {
  @Input() data
  selected: any = []
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    this.selected = [this.data.list[0]];
    $(document).bind('click', function (e) {
      var e = e || window.event;
      var elem = e.target || e.srcElement;
      while (elem) {
        if (elem.id && elem.id == 'system_list') {
          return;
        }
        elem = elem.parentNode;
      }
      $('.system_ul').slideUp(300); 
    });
  }
  showSelect() {
    $(".system_ul").slideToggle(300);
  }
  changeItem(obj, index) {
    let haved = this.selected.some(item => { return item.name === obj.name });
    if (!haved) {
      this.selected.push(obj);
      this.data.list[index].active = 'active'
    } else {
      if (index != 0) {
        let remove = this.selected.findIndex(item => { return item.name === obj.name });
        this.selected.splice(remove, 1);
        this.data.list[index].active = ''
      }
    }
  }
  returnTitle(title) {
    $(".system_title").html(title);
  }
  returnTxt(txt) {
    $(".system_txt").html(txt);
  }
}
