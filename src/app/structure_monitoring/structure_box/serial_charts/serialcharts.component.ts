import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../../../service/service';
import * as moment from 'moment';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
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
  token = sessionStorage.token;
  serialname = [];
  serialdata = [];
  firstEndtime = '';search=false;
  total = {
    max: '', min: '', avg: '', fc: ''
  };
  timer;
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
  doSearch(){
    $(".chart_mask").fadeIn(300);
    this.serialname = [];
    this.serialdata = [];
    let startTime = this.selectedMoments[0].format('YYYY-MM-DD HH:mm:ss');
    let endTime = this.selectedMoments[1].format('YYYY-MM-DD HH:mm:ss');
    this.getChartsData(startTime,endTime,this.serial,'default');
  }
  getChartsData(startTime, endTime, sensorList, type) {
    console.log(sensorList);
    this.firstEndtime = endTime;
    if (sensorList.length > 0) {
      sensorList.map((item, index) => {
        if (item.checked) {
          this.getData.getSenChSummary(this.router.url.indexOf("SEARCH") > 0?'rtDataC/getSjFxCx':'rtDataC/getSenChQx', this.token, item.chId, startTime, endTime).then(result => {
            if(this.router.url.indexOf("SEARCH") > 0 && index==this.serial.length-1){
              console.log(index);
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
              let obj = {arr:sensorList,index:index}
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
        }
      })
    }else{
      if(this.router.url.indexOf("SEARCH") > 0){
        $(".chart_mask").fadeOut(500);
      }
    }
  }
  getSenChTotal(chIdArray) {
    this.getData.getSenChSummaryTotal('rtDataC/getSenChSummary', this.token, chIdArray).then(result => {
      this.total.max = result.beanModel.length > 0 ? result.beanModel[0].max : '暂无数据';
      this.total.min = result.beanModel.length > 0 ? result.beanModel[1].min : '暂无数据';
      this.total.avg = result.beanModel.length > 0 ? result.beanModel[2].avg : '暂无数据';
      this.total.fc = result.beanModel.length > 0 ? result.beanModel[3].fc : '暂无数据';
    })
  }
  ngOnInit(): void {
    if(this.router.url.indexOf('SEARCH')>0){
      this.search=true;
      this.selectedMoments=[moment(),moment().add(10, 'seconds')];
    }
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
      this.getChartsData(moment().add(-4, 'minutes').format('YYYY-MM-DD HH:mm:ss'), moment().add(-4, 'minutes').add(60, 'seconds').format('YYYY-MM-DD HH:mm:ss'), this.serial, 'default');//正常为60,seconds
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
                   + date.getMinutes();
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
      const chart = echarts.init(document.getElementById('chart'));
      chart.clear();
      chart.setOption(option);
      chart.resize();
    })
  }
  refreshChart(){
    const chart = echarts.init(document.getElementById('chart'));
    chart.resize();
  }

}
