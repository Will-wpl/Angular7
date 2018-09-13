import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { systemConfig } from '../util'
import { AllService } from '../service/service';
import * as moment from 'moment';
@Component({
  selector: 'data-bjcl',
  templateUrl: './data-bjcl.component.html',
})
export class DatabjclComponent implements OnInit {
  token = sessionStorage.token ? sessionStorage.token : '';
  pageType = ''; sensor = []; table_list = []; total = [];
  save_disabled = false; level = []; page = 1; rows = 10; alarm_level=''
  prev_disabled = false; next_disabled = false;
  deal_with="待处理";
  selectedMoments=[moment(),moment()];
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private getData: AllService) { }
  ngOnChanges(): void {

  };
  doSearch(){

  }
  doFix(index) {
    this.table_list[index].readonly = false;
  }
  doSave(index, chId) {
    //console.log(this.table_list[index].rulesBuf);
    this.getData.saveRuleByCh('alarmC/saveRuleByCh', this.token, sessionStorage.userId, chId, this.table_list[index].rulesBuf).then(result => {
      if (result.code == "200") {
        this.save_disabled = false;
        this.table_list[index].readonly = true;
      }
    })
  }
  selectChange(val) {
    this.alarm_level = val;
    this.table_list=[];
    this.total=[];
    this.getRuleBySenType();
  }
  getRuleBySenType() {
    this.getData.getRuleBySenType('alarmC/getRuleBySenType', this.token, this.value, this.page, this.rows).then(result => {
      if (result.rows) {
        let y = result.total % this.rows, s = result.total / this.rows,
          count = s > 1 ? (y > 0 ? Math.ceil(s) + 1 : result.total / this.rows) : 1;
        if (count == 1) {
          this.prev_disabled = true;
          this.next_disabled = true;
        }
        if (this.total.length == 0) {
          for (let k = 1; k <= count; k++) {
            this.total.push({
              index: k, selected: (k == 1 ? 'selected' : '')
            });
          }
          this.prev_disabled = true;
        }
        result.rows.map((item, index) => {
          item.readonly = true;
          this.table_list[index] = item;
        })
      }
    })
  }
  goPage(num) {
    if (typeof (num) == "number") {
      this.page = num;
      this.total.map(item => { item.selected = '' });
      this.total[num - 1].selected = 'selected';
      if (this.page == 1) {
        this.prev_disabled = true;
      } else {
        this.prev_disabled = false;
      }
      if (this.page == this.total[this.total.length - 1].index) {
        this.next_disabled = true;
      } else {
        this.next_disabled = false;
      }
    } else {
      switch (num) {
        case "prev":
          if (this.page == 1) {
            this.goPage(1)
          } else {
            this.goPage(this.page - 1)
          }
          break;
        case "next":
          if (this.page == this.total[this.total.length - 1].index) {
            this.goPage(this.total[this.total.length - 1].index)
          } else {
            this.goPage(this.page + 1);
          }
          //this.page==this.total[this.total.length-1].index?this.goPage(1):this.goPage(this.page+1);
          break;
      }
    }
    setTimeout(() => { this.getRuleBySenType() });
  }
  getSensorType() {
    this.getData.getSensorType('sensorC/getSensorType', this.token).then(result => {
      if (result.beanModel) {
        this.level = result.beanModel;
        this.alarm_level = result.beanModel[0].id;
        this.getRuleBySenType();
      }
    })
  }
  ngOnInit(): void {
    this.getSensorType();
  }
}
