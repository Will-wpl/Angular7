import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { systemConfig } from '../util'
import { AllService } from '../service/service';
import * as moment from 'moment';
import * as $ from 'jquery';
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
  selectedMoments=[moment("2017-04-10"),moment()];
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private getData: AllService) { }
  ngOnChanges(): void {

  };
  doSearch(){
    this.table_list=[];
    this.total=[];
    this.getAlarmLogs();
  }
  doDeal(id) {
    $("#alarmModal .modal-body p,.form-group .error").hide();
    $("#alarmModal .btn-primary,#alarmModal form").show();
    sessionStorage.logId = id;
    sessionStorage.submitType="databjcl";
  }
  setAlarmInfo(info){
    this.save_disabled = true;
    info.logId = sessionStorage.logId;
    $("#alarmModal .btn-primary,#alarmModal form").hide();
    $("#alarmModal .modal-body p").html("<span class='loading'></span>").show();
    this.getData.saveAlarmDealInfo('alarmC/saveAlarmDealInfo', this.token,info).then(result => {
        if(result.code){
            this.save_disabled = false;
            switch(result.code){
                case 200 : $("#alarmModal .modal-body p").text("提交成功！");
                break;
                case 203 : $("#alarmModal .modal-body p").text("操作失败!");
                break;
                case 403 : $("#alarmModal .modal-body p").text("未找到logId，资源不存在！");
                break;
            }
        }else{
            $("#alarmModal .modal-body p").text("无返回信息，提交失败！");
        }
    })
  }
  selectChange(val,type) {
    if(type == "alarm"){
      this.alarm_level = val;
    }else{
      this.deal_with = val;
    }
  }
  getAlarmLogs() {
    let startTime = this.selectedMoments[0].format('YYYY-MM-DD');
    let endTime = this.selectedMoments[1].format('YYYY-MM-DD');
    this.getData.getAlarmLogs('alarmC/getAlarmLogs', this.token, this.alarm_level,this.deal_with,startTime,endTime, this.page, this.rows).then(result => {
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
    setTimeout(() => { this.getAlarmLogs() });
  }
  getRuleLevel() {
    this.getData.getRuleLevel('alarmC/getRuleLevel', this.token).then(result => {
      if (result) {
        this.level = result;
        this.alarm_level = result[0].id;
        this.getAlarmLogs();
      }
    })
  }
  ngOnInit(): void {
    this.getRuleLevel();
  }
}
