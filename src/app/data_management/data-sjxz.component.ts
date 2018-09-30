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
  numtype=[{name:'视频',active:'active'},{name:'车载',active:''}];
  dataselected=[];numselected=[];
  selectedMoments=[moment(),moment()];
  file=["/staticFiles/chData/2018-08-01/FDYB-1_3D-i15-e32-i_2018-08-01.rar",
  "/staticFiles/chData/2018-08-02/FDYB-1_3D-i15-e32-i_2018-08-02.rar",
  "/staticFiles/chData/2018-08-03/FDYB-1_3D-i15-e32-i_2018-08-03.rar"]
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private getData: AllService) { }
  ngOnChanges(): void {

  };
  
  ngOnInit(): void {
    this.numselected = [this.numtype[0]];
    this.getSensorType();
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
    this.file.map(item=>{
      this.download(MainUrl+item)
    })
  }
  download(url) {
    var page_url = url;
    var req = new XMLHttpRequest();
    req.open("POST", page_url, true);
    //监听进度事件
    req.addEventListener("progress", function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            console.log(percentComplete);
            $("#progressing").html((percentComplete * 100) + "%");
        }
    }, false);

    req.responseType = "blob";
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            var filename = "file";
            if (navigator.userAgent.indexOf('Chrome') != -1) {
                // Chrome version
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(req.response);
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
        }
    };
    req.send();
}
  getSensorType() {
    this.getData.getSensorType('sensorC/getSensorType', this.token).then(result => {
      //console.log("SEARCH下拉菜单列表",result);
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
      }
    })
  }
  showSelect(type) {
    $("#"+type).slideToggle(300);
  }
  changeItem(obj, index,type) {
    let haved = type=="data"?this.dataselected.some(item => { return item.name === obj.name }):this.numselected.some(item => { return item.name === obj.name });
    if (!haved) {
      type=="data"?this.dataselected.push(obj):this.numselected.push(obj);
      type=="data"?this.datatype[index].active = 'active':this.numtype[index].active = 'active';
    } else {
      if (index != 0) {
        let remove = type=="data"?this.dataselected.findIndex(item => { return item.name === obj.name }):this.numselected.findIndex(item => { return item.name === obj.name });
        type=="data"?this.dataselected.splice(remove, 1):this.numselected.splice(remove, 1);
        type=="data"?this.datatype[index].active = '':this.numtype[index].active = '';
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
