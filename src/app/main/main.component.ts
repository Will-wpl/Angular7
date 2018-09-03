import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../service/service';
import { VideoObj } from '../util';
import * as $ from 'jquery';
declare const WebVideoCtrl
import * as moment from 'moment';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  token = sessionStorage.token ? sessionStorage.token : '';
  left_data=[];video=VideoObj;videoList=[];alarmId=0;
  zoneId=0;alarm_data=[];moment=moment;
  constructor(
    private router: Router,
    private getData: AllService,) { }
  ngOnInit(): void {
    this.getData.getRealData('rtDataC/getRealData', this.token).then(result => {
        this.left_data = result.beanModel?result.beanModel:[];
    })
    this.getData.getCurrentAlarmData('alarmC/getCurrentAlarmData', this.token).then(result => {
      this.alarm_data = result.beanModel?result.beanModel:[];
      this.alarm_data.map((item)=>{
          switch(item.lvlName.split("警情")[0]){
            case "I级":item.class='red';
            break;
            case "II级":item.class='orange';
            break;
            case "III级":item.class='yellow';
            break;
            case "IV级":item.class='blue';
            break;
            case "暂无":item.class='white';
            break;
          }
      })
    })
    this.getCheckList();
    $(function () {
      // 检查插件是否已经安装过
      let $uList = $(".show_police ul");
      let timer = null;
        //触摸清空定时器
        $uList.hover(function() {
            clearInterval(timer);
        },
        () => { //离开启动定时器
            timer = setInterval(function() {
                scrollList($uList);
            },
            5000);
        }).trigger("mouseleave"); //自动触发触摸事件
        //滚动动画
        function scrollList(obj) {
            //获得当前<li>的高度
            var scrollHeight = $(".show_police").height();
            //滚动出一个<li>的高度
            $(obj).stop().animate({
                marginTop: -scrollHeight
            },
            600,
            function() {
                //动画结束后，将当前<ul>marginTop置为初始值0状态，再将第一个<li>拼接到末尾。
                $(obj).css({
                    marginTop: 0
                }).find("li:first").appendTo($(obj));
            });
        }
      let iRet = WebVideoCtrl.I_CheckPluginInstall();
      if (-1 == iRet) {
          alert("您还未安装过插件，双击开发包目录里的WebComponentsKit.exe安装！");
          return;
      }
      let w = $(".video_main").width();
      // 初始化插件参数及插入插件
      WebVideoCtrl.I_InitPlugin(w, 760, {
          bWndFull: true,     //是否支持单窗口双击全屏，默认支持 true:支持 false:不支持
          iPackageType: 2,    //2:PS 11:MP4
          iWndowType: 2,
          bNoPlugin: true,
          cbSelWnd: function (xmlDoc) {
              this.video.g_iWndIndex = parseInt($(xmlDoc).find("SelectWnd").eq(0).text(), 10);
              let szInfo = "当前选择的窗口编号：" + this.video.g_iWndIndex;
              this.video.showCBInfo(szInfo);
          },
          cbDoubleClickWnd: function (iWndIndex, bFullScreen) {
              let szInfo = "当前放大的窗口编号：" + iWndIndex;
              if (!bFullScreen) {            
                  szInfo = "当前还原的窗口编号：" + iWndIndex;
              }
              this.video.showCBInfo(szInfo);                             
              // 此处可以处理单窗口的码流切换
              /*if (bFullScreen) {
                  clickStartRealPlay(1);
              } else {
                  clickStartRealPlay(2);
              }*/
          },
          cbEvent: function (iEventType, iParam1, iParam2) {
              if (2 == iEventType) {// 回放正常结束
                this.video.showCBInfo("窗口" + iParam1 + "回放结束！");
              } else if (-1 == iEventType) {
                this.video.showCBInfo("设备" + iParam1 + "网络错误！");
              } else if (3001 == iEventType) {
                this.video.clickStopRecord(this.video.g_szRecordType, iParam1);
              }
          },
          cbRemoteConfig: function () {
            this.video.showCBInfo("关闭远程配置库！");
          },
          cbInitPluginComplete: function () {
              $("#divPlugin").remove();
              $(".video_main").prepend("<div id='divPlugin' class='plugin main_video'></div>");
              WebVideoCtrl.I_InsertOBJECTPlugin("divPlugin");
              // 检查插件是否最新
              if (-1 == WebVideoCtrl.I_CheckPluginVersion()) {
                  alert("检测到新的插件版本，双击开发包目录里的WebComponentsKit.exe升级！");
                  return;
              }
          }
      });
      // 窗口事件绑定
      $(window).resize(
          function () {
              var $Restart = $("#divPlugin object");
              if ($Restart.length > 0) {
                  //var oSize = this.video.getWindowSize();
                  $Restart.attr('width',$(".video_main").width());
              }
          }
      );      
      // //初始化日期时间
      // var szCurTime = this.video.dateFormat(new Date(), "yyyy-MM-dd");
      // $("#starttime").val(szCurTime + " 00:00:00");
      // $("#endtime").val(szCurTime + " 23:59:59");
  });
  }
  ngAfterViewInit(){
      setTimeout(()=>{this.video.clickLogin()},1000);
      setTimeout(()=>{this.showVideo()},1500);
  }
  showVideo(){
    this.videoList.map((item,index)=>{
      this.video.clickStopRealPlay(index);
      this.video.clickStartRealPlay(undefined,index,(index+1));
    })
    this.video.clickStartRealPlay(undefined,null,null);
  }
  show_video_control(type){
    if(type=="open"){
        $(".video_btn").hide();
        $(".video_control_nr").fadeIn(300);
    }else{
        $(".video_btn").fadeIn(300);
        $(".video_control_nr").hide();
    }
  }
  getId(id,name){
        sessionStorage.alarmId = id;
        $("#alarmModalLabel").text('故障设备：'+name);
        $("#alarmModal .modal-body p,.form-group .error").hide();
        $("#alarmModal .btn-primary,#alarmModal form").show();
  }
  setAlarmInfo(info){
    info.logId = sessionStorage.alarmId;
    this.getData.saveAlarmDealInfo('alarmC/saveAlarmDealInfo', this.token,info).then(result => {
        $("#alarmModal .btn-primary,#alarmModal form").hide();
        $("#alarmModal .modal-body p").show();
        if(result.code){
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
  getCheckList() {
    this.getData.getCameraZone('cameraC/getCameraInfos', this.token,this.zoneId).then(result => {
      const videoList = [];
      if (result.beanModel.length>0) {
        result.beanModel.map((item, index) => {
          videoList.push(item);
        })
        this.videoList = [].concat(videoList);
        $("#loginip").val("").val(this.videoList[0].serverIp);
        $("#port").val("").val(this.videoList[0].serverPort);
        $("#username").val("").val(this.videoList[0].userName);
        $("#password").val("").val(this.videoList[0].pwd);
      }
    })
  }
}
