import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../service/service';
import { VideoObj } from '../util';
import * as $ from 'jquery';
declare const WebVideoCtrl
@Component({
  selector: 'video-monitoring',
  templateUrl: './videomonitoring.component.html',
})
export class VideomonitoringComponent implements OnInit {
  token = sessionStorage.token ? sessionStorage.token : '';
  master=false;zoneId='';
  videoList=[];video=VideoObj;
  constructor(
    private router: Router,
    private getData: AllService,) { }
  selectAll(event):void{
    if(event.target.checked){
      this.master=true;
      this.videoList.map((item)=>{
        item.checked=true;
      })
      this.showVideo();
    }else{
      this.master=false;
      this.videoList.map((item)=>{
        item.checked=false;
      })
      this.showVideo();
    }
    //console.log(this.master);
  }
  selectChange(event,index):void{ 
    if(event.target.checked){
      this.videoList[index].checked=true;
      this.showVideo();
    }else{
      this.videoList[index].checked=false;
      this.showVideo();
    }
  }
  ngOnChanges():void{
    
  }
  showVideo(){
      this.videoList.map((item,index)=>{
        if(item.checked){
          if(index != 0){
            this.video.clickStopRealPlay(index);
            this.video.clickStartRealPlay(undefined,index,(index+1));
          }
        }else{
          if(index != 0){
            this.video.clickStopRealPlay(index);
          }
        }
      })
      if(this.videoList[0].checked){
        this.video.clickStartRealPlay(undefined,null,null);
      }else{
        this.video.clickStopRealPlay(null);
      }
  }
  ngOnInit(): void {
      this.zoneId = sessionStorage.zoneId;
      this.getCheckList(4);
      $(function () {
          // 检查插件是否已经安装过
          let iRet = WebVideoCtrl.I_CheckPluginInstall();
          if (-1 == iRet) {
              alert("您还未安装过插件，双击开发包目录里的WebComponentsKit.exe安装！");
              return;
          }
          let w= $(".video_main").width();
          // 初始化插件参数及插入插件
          WebVideoCtrl.I_InitPlugin(w-460, 430, {
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
                  $(".video_main").prepend("<div id='divPlugin' class='plugin'></div>");
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
                    $Restart.attr('width',$(".video_main").width()-460);
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
  getCheckList(limited) {
    this.getData.getCameraZone('cameraC/getCameraInfos', this.token,this.zoneId).then(result => {
      const videoList = [];
      if (result.beanModel.length>0) {
        result.beanModel.map((item, index) => {
          let vidoeObj = item;
          if (index < limited) {
            vidoeObj.checked = true;
          } else {
            vidoeObj.checked = false;
          }
          videoList.push(vidoeObj);
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
