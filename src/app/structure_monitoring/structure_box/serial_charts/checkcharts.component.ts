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
  selector: 'check-charts',
  templateUrl: './checkcharts.component.html',
  providers:[
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS}
  ]
})
export class CheckchartsComponent implements OnInit {
  @Input() serial;
  @Input() allserial;
  @Input() title
  @Input() chartHeight;
  token = sessionStorage.token;
  serialname = [];checkTable=[];
  serialdata = [];
  firstEndtime = '';search=false;
  serialType='';showTitle=true;
  total = [];  timer;senChIds=[];
  selectedMoments = [];checkArray="";
  
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
    $('#chartEdit').hide();
  }
  editclose(){
    $("#EditSuccess").hide();
  }
  getChartsData(lineId,clickType) {
    //console.log(sensorList);
    this.getData.getCharsData('lineSetC/getCharsData', this.token, lineId).then(result => {
      if (result.beanModel && result.beanModel.length>0) {
        let rtVal = [];
        this.serialname=[];this.serialdata=[];
        result.beanModel.map((item,index) => {
          rtVal.push(item.rtVal);
          this.serialname.push(item.name);
          //console.log(this.serialname);
          //this.timeData.push(item.createTime);
        })
        let seriesObj = {
          name: "线形",
          type: 'line',
          data: rtVal,
        }
        this.serialdata.push(seriesObj);
        this.createCharts();
        if(clickType){
          $("#chartEdit").hide();
          $("#EditSuccess").fadeIn(300);
          $("#EditSuccess p").text("设置成功！");
        }
      }else{
        this.initCharts();
      }
    })
  }
  initCharts(){
    let seriesObj = {
      name: "无数据",
      type: 'line',
      data: 0,
      itemStyle: {
        normal: {
          color: this.colorList[0] ? this.colorList[0] : this.colorList[Math.floor(Math.random() * 9)],
          lineStyle: {
            color: this.colorList[0] ? this.colorList[0] : this.colorList[Math.floor(Math.random() * 9)] //Math.floor(Math.random()*9
          }
        }
      }
    }
    this.serialname.push("无数据");
    this.serialdata.push(seriesObj);
    this.createCharts();
  }
  getSenChTotal(chIdArray) {
    this.getData.getSenChSummaryTotal('rtDataC/getSenChSummary', this.token, chIdArray).then(result => {
      this.total = result.beanModel;
      console.log(this.total);
    })
  }
  checkLine(e,index){
    if(e.target.checked){
      this.checkTable.map(item=>{item.showFlg=false});
      this.checkTable[index].showFlg=true;
    }
  }
  checkItem(e,index,itemId,senChId){
    if(e.target.checked){
      this.checkTable[index].senChList[itemId].checked=true;
    }else{
      this.checkTable[index].senChList[itemId].checked=false;
    }
  }
  getAllCheckLine(chIdArray){
    if(chIdArray != ""){
      this.getData.getAllLine('lineSetC/getAllLine', this.token, chIdArray).then(result => {
        this.checkTable=result.beanModel.length>0?result.beanModel:[];
        this.Confirm(false);
      })
    }
  }
  senReset(){
    this.getData.senChReset('lineSetC/reset', this.token, this.checkArray).then(result => {
      this.checkTable=result.beanModel.length>0?result.beanModel:[];
      $("#chartEdit").hide();
      $("#EditSuccess").fadeIn(300);
      $("#EditSuccess p").text("重置成功！");
    })
  }
  lineSetSave(item){
    let senChIds = item.senChList.filter(s=>{
      return s.checked == true;
    }).map(k=>{
      return k.senChId;
    });
    this.getData.senChSave('lineSetC/save', this.token, item.lineId,item.lineName,item.showFlg,senChIds,this.checkArray,item.defultFlg).then(result => {
      this.checkTable=result.beanModel.length>0?result.beanModel:[];
      $("#chartEdit").hide();
      $("#EditSuccess").fadeIn(300);
      $("#EditSuccess p").text("保存成功！");
    })
  }
  Confirm(clickType){
    let lineId = 0;
    this.checkTable.map(it=>{
      if(it.showFlg == true){
        lineId = it.lineId;
      }
    })
    this.getChartsData(lineId,clickType);
  }
  Addline(){
    let netItem = {
      "lineId":"",
      "lineName":"",
      "defultFlg":false,
      "showFlg":true,
      "senChList":[]
    };
    this.getData.getSenchList('lineSetC/getAllSenchList', this.token,this.checkArray).then(result => {
      if(result.beanModel){
        if(result.beanModel.length>0){
          netItem.senChList=result.beanModel;
          this.checkTable.push(netItem);
        }
      }
    })
  }
  ngOnInit(): void {
    if(this.router.url.indexOf('SEARCH')>0 || this.router.url.indexOf('WD')>0){
       this.showTitle=false;
    }
    this.serialType=this.router.url.substr(this.router.url.lastIndexOf("/")+1,this.router.url.length);
    this.checkArray=sessionStorage.senTypeId?sessionStorage.senTypeId:"";
    this.getAllCheckLine(this.checkArray);
  }
  ngOnChanges(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {//定时器10秒刷一次
      this.Confirm(false);
    }, 60000)
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
      // tooltip : {
      //   trigger: 'item',
      //   formatter : function (params) {
      //       let date = new Date(params.value[0]);
      //       let data = date.getFullYear() + '-'
      //              + (date.getMonth() + 1) + '-'
      //              + date.getDate() + ' '
      //              + date.getHours() + ':'
      //              + date.getMinutes();
      //       return params.seriesName + '<br/>'
      //              +"时间 ："+ data + '<br/>'
      //              +"数值 ："+ params.value[1]
      //   }
      // },
      legend: {
        data: this.serialname,
        textStyle: {    //图例文字的样式
          color: '#666',
          fontSize: 12
        }
      },
      xAxis: {
        type : 'category',
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
        data: this.serialname
      },
      // dataZoom: {
      //   show: true,
      //   start : 80,
      //   textStyle:{
      //     color:'#fff'
      //   }
      // },
      yAxis: {
        type : 'value',
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
        }
      },
      series: this.serialdata
    }
    setTimeout(() => {
      const chart = echarts.init(document.getElementById('check_chart'));
      chart.clear();
      chart.setOption(option);
      chart.resize();
    })
  }
  refreshChart(){
    const chart = echarts.init(document.getElementById('check_chart'));
    chart.resize();
  }

}
