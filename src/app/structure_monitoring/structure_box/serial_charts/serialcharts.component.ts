import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../../../service/service';
import * as moment from 'moment';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import {SerialtypeComponent} from './serialtype.component'
import * as $ from 'jquery';
declare const echarts
export const MY_MOMENT_FORMATS = {fullPickerInput: 'YYYY-MM-DD HH:mm:ss'};
@Component({
  selector: 'serial-charts',
  templateUrl: './serialcharts.component.html',
  providers:[
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS}
  ]
})
export class SerialchartsComponent implements OnInit {
  @Input() serial;
  @Input() allserial;
  @Input() chartHeight;
  @Input() noTitle;
  @Input() chartId;
  @Input() titleName;
  token = sessionStorage.token;
  serialname = [];
  serialdata = [];
  firstEndtime = '';search=false;
  serialType='';
  total = [];  timer;
  selectedMoments = [];
  colorList = [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'
  ];
  @Output() onVoted: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private getData: AllService) {
    //console.log('echarts,', echarts)
  }
  close(){
    $('#searchError').hide();
  }
  doSearch(){
    if((this.selectedMoments[1]-this.selectedMoments[0])/1000>=86400){
      $('#searchError').fadeIn(500);
      return;
    }
    this.initCharts();
    $(".chart_mask").fadeIn(300);
    this.serialname = [];
    this.serialdata = [];
    let startTime = this.selectedMoments[0].format('YYYY-MM-DD HH:mm:ss');
    let endTime = this.selectedMoments[1].format('YYYY-MM-DD HH:mm:ss');
    this.getChartsData(startTime,endTime,this.serial,'default');
  }
  getSenChSummary7Day(chIdArray){
    this.getData.getSenChSummary7Day('rtDataC/getSenChSummary7Day', this.token, chIdArray).then(result => {
      this.total = result.beanModel;
    })
  }
  getSenChSummaryMinutes(chIdArray){
    this.getData.getSenChSummaryMinutes('rtDataC/getSenChSummaryMinutes', this.token, chIdArray,-10).then(result => {
      this.total = result.beanModel;
      console.log(this.total);
    })
  }
  getChartsData(startTime, endTime, list, type) {
    //console.log(sensorList);
    let sensorList = [];let chId=[];
    this.firstEndtime = endTime;
    if (list.length > 0) {
      if(this.chartId){
        switch(this.chartId){
          case "x":sensorList = list.filter((it,i)=>{ return it.text.substr(it.text.length-1,1)=="X"});
          break;
          case "y":sensorList = list.filter((it,i)=>{ return it.text.substr(it.text.length-1,1)=="Y"});
          break;
          case "z":sensorList = list.filter((it,i)=>{ return it.text.substr(it.text.length-1,1)=="Z"})
          break;
          case "dw":sensorList = list.filter((it,i)=>{ return it.text.substr(0,2)=="DW"});
          break;
          case "dz":sensorList = list.filter((it,i)=>{ return it.text.substr(0,2)=="DZ"});
          break;
          case "dl":sensorList = list.filter((it,i)=>{ return it.text.substr(0,2)=="DL"})
          break;
        }
      }else{
        sensorList = list
      }
      setTimeout(()=>{
        sensorList.map((item, index) => {
          chId.push(item.chId);
          if (item.checked) {
            this.getData.getSenChSummary(this.router.url.indexOf("SEARCH") > 0?'rtDataC/getSjFxCx':'rtDataC/getSenChQx', this.token, item.chId, startTime, endTime).then(result => {
              if(this.router.url.indexOf("SEARCH") > 0 && index==sensorList.length-1){
                $(".chart_mask").hide();
              }
              let thisArr = [];
              if (result.beanModel && result.beanModel.length>0) {
                result.beanModel.map((it) => {
                  let thisObj = [it.createTime, it.rtVal];
                  thisArr.push(thisObj);
                  //this.timeData.push(item.createTime);
                })
              }else{
                sensorList[index].checked=false;
                let checkIndex = this.allserial.findIndex(i=>{
                  return item.chId == i.chId;
                })
                let obj = {arr:sensorList,index:checkIndex}
                this.onVoted.emit(obj);
              }
              let seriesObj = {
                name: item.text,
                type: 'line',
                data: thisArr.length > 0 ? thisArr : [[moment(),0]],
                itemStyle: {
                  normal: {
                    color: this.colorList[index] ? this.colorList[index] : this.colorList[Math.floor(Math.random() * 9)],
                    lineStyle: {
                      color: this.colorList[index] ? this.colorList[index] : this.colorList[Math.floor(Math.random() * 9)] //Math.floor(Math.random()*9
                    }
                  }
                }
              }
              if (type == 'setInterval' && this.serialdata[index] && result.beanModel) {
                let filterData = this.serialdata[index].data.filter((ik,i)=>{
                  return i>=result.beanModel.length;
                });
                this.serialdata[index].data=filterData;
                //console.log("本条线过滤掉的数据个数:",filterData.length);
              }
              this.serialname.push(item.checked?item.text:null);
              this.serialdata.push(seriesObj);
              this.createCharts();
            })
          }else{
            if(this.router.url.indexOf("SEARCH") > 0){
              $(".chart_mask").fadeOut(500);
            }
            this.initCharts();
          }
      });
      if(this.serialType=="GJFS"){
        this.getSenChSummary7Day(chId);
      }
      if(this.serialType=="FZJC"){
        this.getSenChSummaryMinutes(chId);
      }
      },500)
    }else{
      if(this.router.url.indexOf("SEARCH") > 0){
        $(".chart_mask").fadeOut(500);
        this.initCharts();
      }
    }
  }
  initCharts(){
    let seriesObj = {
      name: "",
      type: 'line',
      data: [[moment(),0]],
      itemStyle: {
        normal: {
          color: this.colorList[0] ? this.colorList[0] : this.colorList[Math.floor(Math.random() * 9)],
          lineStyle: {
            color: this.colorList[0] ? this.colorList[0] : this.colorList[Math.floor(Math.random() * 9)] //Math.floor(Math.random()*9
          }
        }
      }
    }
    this.serialdata.push(seriesObj);
    this.createCharts();
  }
  getSenChTotal(chIdArray) {
    if(this.serialType!="GJFS" && this.serialType!="FZJC"){
      this.getData.getSenChSummaryTotal('rtDataC/getSenChSummary', this.token, chIdArray).then(result => {
        this.total = result.beanModel;
        this.onVoted.emit(result.beanModel);
      })
    }
  }
  ngOnInit(): void {
    if(this.router.url.indexOf('SEARCH')>0){
      this.search=true;
      this.selectedMoments=[moment(),moment().add(10, 'seconds')];
      this.doSearch();
    }
    this.serialType=this.router.url.substr(this.router.url.lastIndexOf("/")+1,this.router.url.length);
  }
  ngOnChanges(): void {
    if (this.serial.length > 0) {
      this.serialname = [];
      this.serialdata = [];
      let totalArray = [];
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.serial.map((item) => { if (item.checked) { totalArray.push(item.chId); } });
      this.getSenChTotal(totalArray);
      if(this.router.url.indexOf('SEARCH')<=0){
        this.getChartsData(moment().add(-4, 'minutes').format('YYYY-MM-DD HH:mm:ss'), moment().add(-4, 'minutes').add(60, 'seconds').format('YYYY-MM-DD HH:mm:ss'), this.serial, 'default');
      }//正常为60,seconds
      if(!this.search){
        this.timer = setInterval(() => {//定时器10秒刷一次
            if(this.serialdata.length>0){
              let filterSerial  = this.serialdata.filter(l=>{
                return l.data.length > 0;
              })
              this.serialdata=filterSerial;
            }
            //console.log(this.serialdata);
            this.getChartsData(this.firstEndtime, moment(this.firstEndtime).add(10, 'seconds').format('YYYY-MM-DD HH:mm:ss'), this.serial, 'setInterval');
            this.getSenChTotal(totalArray);
          }, 10000)
      }
    }
  }
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  createCharts() {
    let option = {
      title: {
        text: ''
      },
      animation:false,
      tooltip : {
        trigger: 'item',
        formatter : function (params) {
            let date = new Date(params.value[0]);
            let data = date.getFullYear() + '-'
                   + (date.getMonth() + 1) + '-'
                   + date.getDate() + ' '
                   + date.getHours() + ':'
                   + date.getMinutes() + ':'
                   + date.getSeconds();
            return params.seriesName + '<br/>'
                   +"时间 ："+ data + '<br/>'
                   +"数值 ："+ params.value[1]
        }
      },
      legend: {
        data: this.serialname,
        textStyle: {    //图例文字的样式
          color: '#666',
          fontSize: 12
        }
      },
      xAxis: {
        type: 'time',
        splitLine: { show: true },
        splitArea: { show: true },
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: '#666',//左边线的颜色
            width: '2'//坐标线的宽度
          }
        },
        axisLabel: {
          textStyle: {
            color: '#666',//坐标值得具体的颜色

          }
        },
        //data: this.timeData
      },
      // dataZoom: {
      //   show: true,
      //   start : 80,
      //   textStyle:{
      //     color:'#fff'
      //   }
      // },
      yAxis: {
        splitLine: { show: true },
        splitArea: { show: true },
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: '#666',//左边线的颜色
            width: '2'//坐标线的宽度
          }
        },
        axisLabel: {
          textStyle: {
            color: '#666',//坐标值得具体的颜色
          }
        },
        min:function(value) {
          return value.min;
        },
        max:function(value) {
          return value.max;
        },
        splitNumber:8
      },
      series: this.serialdata
    }
    setTimeout(() => {
      const chart = echarts.init(document.getElementById(this.chartId?this.chartId:'chart'));
      chart.clear();
      chart.setOption(option);
      chart.resize();
    })
  }
  refreshChart(){
    const chart = echarts.init(document.getElementById(this.chartId?this.chartId:'chart'));
    chart.resize();
  }

}
