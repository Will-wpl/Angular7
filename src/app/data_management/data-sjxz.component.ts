import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { systemConfig,MainUrl } from '../util'
import { AllService } from '../service/service';
import * as moment from 'moment';
import * as $ from 'jquery';
@Component({
  selector: 'data-sjxz',
  templateUrl: './data-sjxz.component.html',
})
export class DatasjxzComponent implements OnInit {
  token = sessionStorage.token ? sessionStorage.token : '';
  datatype=[];
  numtype=[];
  dataselected=[];numselected=[];senChIds="";
  selectedMoments=[moment(),moment()];
  fileSize=0;time="0s";
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private getData: AllService) { }
  ngOnChanges(): void {

  };
  
  ngOnInit(): void {
    //this.numselected = [this.numtype[0]];
    this.getSensorType();
    $(document).unbind('click');
    $(document).bind('click', function (e) {
      var e = e || window.event;
      var elem = e.target || e.srcElement;
      while (elem) {
        if (elem.id && elem.id == 'dataList' ||
            elem.id && elem.id == 'numList'  ||
            elem.id && elem.id == 'num' ||
            elem.id && elem.id == 'data' 
            ) {
          return;
        }
        elem = elem.parentNode;
      }
      $('.system_ul').slideUp(300); 
    });
  }
  dodownload(){
    if(this.dataselected.length==0){
      $(".dataError").fadeIn(300);
      return;
    }
    if(this.numselected.length==0){
      $(".numError").fadeIn(300);
      return;
    }
    $("#startDownload").attr("disabled","disabled");
    this.senDataDownLoad(this.senChIds,moment(this.selectedMoments[0]).format("YYYY-MM-DD"),moment(this.selectedMoments[1]).format("YYYY-MM-DD"));
  }
  download(data,index) {
    var page_url = MainUrl+data[index];
    var req = new XMLHttpRequest();
    req.open("GET", page_url, true);
    //监听进度事件
    req.addEventListener("progress", function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = (evt.loaded / evt.total) * 100;
            //console.log(percentComplete);
            $("#progressing .progressbar").css("width",percentComplete+"%");
            $("#progressing .progressbar").html("下载中:"+percentComplete + "%");
            if(percentComplete<30){
              $("#progressing .progressbar").css("background","red");
            }else if(percentComplete >= 30 && percentComplete < 80){
              $("#progressing .progressbar").css("background","orange");
            }else{
              $("#progressing .progressbar").css("background","green");
            }
        }
    }, false);

    req.responseType = "blob";
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            $("#downed").text(index+1);
            $("#progressing .progressbar").html("下载完成！");
            $("#progressing .progressbar").css("width","100%");
            $("#fileSize").text(((parseFloat($("#fileSize").text())+req.response.size/1024)).toFixed(2)+"KB");
            var filename = "file";
            if (navigator.userAgent.indexOf('Chrome') != -1) {
                // Chrome version
                var link = document.createElement('a');
                link.href = req.responseURL;
                console.log(req);
                link.download = filename;
                link.click();
            } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
                // IE version
                var blob = new Blob([req.response], { type: 'application/force-download' });
                window.navigator.msSaveBlob(blob, filename);
            } else {
                // Firefox version
                var file = new File([req.response], filename, { type: 'application/force-download' });
                window.open(URL.createObjectURL(file));
            }
            if((index+1) == data.length){
              $("#startDownload").removeAttr("disabled");
            }
            if(index<data.length-1){
              setTimeout(()=>{
                $("#progressing .progressbar").html("下载中");
                $("#progressing .progressbar").css("width","0%");
                DatasjxzComponent.prototype.download(data,index+1);
              },1000)
            }
        }
    };
    req.send();
}

  getSensorType() {
    this.getData.getSensorType('sensorC/getSensorType', this.token).then(result => {
      if (result.beanModel) {
        this.datatype = result.beanModel;
        this.datatype.map((item,index)=>{
          if(index == 0){
            item.active='active';
          }else{
            item.active='';
          }
        })
        this.dataselected = [this.datatype[0]];
        this.getSensorChsByTypes(this.datatype[0].id);
      }
    })
  }
  getSensorChsByTypes(typeId) {
    this.getData.getSensorChsByTypes('sensorC/getSensorChsByTypes', this.token,typeId).then(result => {
      //console.log(result);
      if(result && result.length>0){
        this.numtype = result;
        this.numtype.map((item,index)=>{
          if(index == 0){
            item.active="active"
          }else{
            item.active=""
          }
        })
        this.numselected = [this.numtype[0]];
        this.senChIds = this.numtype[0].chId;
      }
    })
  }
  showSelect(type) {
    $("#"+type).slideToggle(300);
  }
  senDataDownLoad(senChIds,startTime,endTime){
    let timefileError
    this.getData.senDataDownLoad('dataC/senDataDownLoad', this.token,senChIds,startTime,endTime).then(result => {
      if(result.beanModel && result.beanModel.length>0){
        //console.log(result.beanModel);
        $(".fileError").hide();
        this.time = result.beanModel.length*2+"s";
        this.download(result.beanModel,0);
        $("#downedtotal").text(result.beanModel.length);
        // result.beanModel.map(item=>{
        //   this.download(MainUrl+item);
        // })
      }else{
        clearTimeout(timefileError);
        $(".fileError").fadeIn(500);
        timefileError = setTimeout(()=>{
          $(".fileError").fadeOut(300);
        },3000);
        $("#startDownload").removeAttr("disabled");
      }
    })
  }
  changeItem(obj, index,type) {
    let haved = type=="data"?this.dataselected.some(item => { return item.name === obj.name }):this.numselected.some(item => { return item.chName === obj.chName });
    if (!haved) {
      type=="data"?this.dataselected.push(obj):this.numselected.push(obj);
      type=="data"?this.datatype[index].active = 'active':this.numtype[index].active = 'active';
      let selectedArr = type=="data"?this.dataselected.map(it=>{return it.id}):this.numselected.map(it=>{return it.chId});
      type=="data"?this.getSensorChsByTypes(selectedArr.join(",")):this.senChIds=selectedArr.join(",");
      //console.log(selectedArr.join(","));
    } else {
      //if (index != 0) {
        let remove = type=="data"?this.dataselected.findIndex(item => { return item.name === obj.name }):this.numselected.findIndex(item => { return item.chName === obj.chName });
        type=="data"?this.dataselected.splice(remove, 1):this.numselected.splice(remove, 1);
        type=="data"?this.datatype[index].active = '':this.numtype[index].active = '';
        let selectedArr = type=="data"?this.dataselected.map(it=>{return it.id}):this.numselected.map(it=>{return it.chId});
        type=="data"?this.getSensorChsByTypes(selectedArr.join(",")):this.senChIds=selectedArr.join(",");
      //}
    }
    if(this.dataselected.length>0){
      $(".dataError").fadeOut(300);
    }
    if(this.numselected.length>0){
      $(".numError").fadeOut(300);
    }
  }
  returnTitle(title) {
    $(".system_title").html(title);
  }
  returnTxt(txt) {
    $(".system_txt").html(txt);
  }
}
