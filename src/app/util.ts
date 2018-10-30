import * as $ from 'jquery';
declare const WebVideoCtrl
export class Hero {
  id: number;
  name: string;
}
export const MainUrl = 'http://i.lailibai.com:3001'//i.lailibai.com:3001
export const writeCurrentDate=()=> {
    let timer:any;
    // clearTimeout(timer);
    let now = new Date();
    let year:any = now.getFullYear(); //得到年份
    let month:any = now.getMonth()+1;//得到月份
    let date:any = now.getDate();//得到日期
    let day:any = now.getDay();//得到周几
    let hour:any = now.getHours();//得到小时
    let minu:any = now.getMinutes();//得到分钟
    let sec:any = now.getSeconds();//得到秒
    let MS:any = now.getMilliseconds();//获取毫秒
    let week:any;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    if (MS < 100) MS = "0" + MS;
    let arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    week = arr_week[day];
    let time = "";
    time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;
    // timer = setTimeout(()=>{
    //     writeCurrentDate()
    // }, 1000);
    return time
}

export const dedupe=(arr)=>{
    let res = []; 
    res = arr.filter((item)=>{
    return res.includes(item) ? '' : res.push(item);
    });
    return res;
}

export const deepdedupe=(arr, name)=>{
    var hash = {};
    return arr.reduce((item, next)=>{
      hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
      return item;
    }, []);
}

export const supportConfig={
    KFZX:{
        img1:'images/kf1.png',title:"大连三维土木监测技术有限公司",
        img2:'images/kf2.png',tel:"0411-********",
        img3:'images/kf3.png',qq:"********",
        img4:'images/kf4.png',wx:"********",
        img5:'images/kf5.png',email:"********@163.com"
    },
    TXDZ:{
        img1:'images/tx1.png',
        img2:'images/tx2.png',title:"大连三维土木监测技术有限公司",
        contact:"电话：0411-********<br/>"+
                "网站：www.***.com.cn<br/>"+
                "地址：大连高新技术产业园区嘉创大厦<br/>"+
                "邮编：116023"
    },
    RJBB:{
        img1:"images/rj1.png",
    }
}

export const systemConfig={
    GCJJ:{
      img:'images/show_img.gif',
      text:'岳阳三荷机场位于岳阳经开区三荷乡，距市区约18公里，建设标准按“4D”规划、“4C”建设，项目建设用地2273亩，跑道长2600米，'+
           '航站楼建筑面积15000平方米。到2020年，预计旅客吞吐量60万人次，货邮吞吐量1800吨，飞机起降量6450架次。机场1.5小时车程可覆盖环洞庭湖区、'+
           '江汉平原和湘鄂赣毗邻地区2300多万人口，将为岳阳市发展航空货运、临空产业创造有利条件，将对岳阳市构建立体交通网络、提升城市整体形象、促进经济跨越发展，产生积极而又深远的影响'
    },
    MKGN:{
      img:'images/mkgn_img.png',
      title:'1、系统架构<br/>'+
                '航站楼健康监测系统由传感器子系统、数据传输和采集子系统、'+
                '数据存储子系统以及数据管理和分析子系统四部分组成。其中传感器子系统由加速度传感器、'+
                '光纤光栅温度传感器、光纤光栅应变传感器、倾角仪、索力传感器组成；'+
                '数据传输和采集子系统由光电同步采集仪、电类采集仪以及磁通量采集仪组成；'+
                '数据传输和存储子系统主要由安装在服务器上的数据库系统构成；'+
                '数据管理和分析子系统主要由安装在服务器上的健康监测分析软件构成。系统总体框架如下图所示。',

      text:'2、软件系统模块功能<br/><br/>'+
  
                '（1）视频监控模块<br/>'+
                '视频监控主要考虑对航站楼出入口、航站楼周边等进行全方位无死角的监控，确保实现对危及公共财产和生命安全的事件做到及时发现和处置。因此，针对岳阳三荷机场航站楼视频监控项目，考虑建设航站楼周界视频监控系统。对于周界视频监控系统，需要具有宽动态、大倍数变焦的特点，能够适用于室外强光环境，能够实现远距离昼夜全天候视频监控。该模块可以实现对航站楼周边监控画面进行实时采集和监视。<br/><br/>'+
                
                '（2）环境监测模块<br/>'+
                '该模块主要向用户提供对传感器子系统中采集环境作用的传感器监测数据进行实时显示和查看的功能。具体包括环境温度传感器等。<br/><br/>'+
                
                '（3）结构监测模块<br/>'+
                '该模块主要向用户提供对传感器子系统中采集结构响应的传感器监测数据进行实时显示和查看的功能。具体包括应变、索力、加速度、倾角等监测数据。<br/><br/>'+
                
                '（4）数据分析模块<br/>'+
                '该模块主要向用户提供对结构健康监测系统的数据库中各类历史监测数据进行查询的功能。具体包括对温度、应变、索力、加速度、倾角等监测数据的追溯和查询。<br/><br/>'+
                
                '（5）数据管理模块<br/>'+
                '该模块主要向用户提供对健康监测系统报警信息进行查询和处理、对历史监测数据进行查询和追溯、对数据库存储的历史监测数据进行下载的功能。<br/><br/>'+
                
                '（6）系统设置模块<br/>'+
                '该模块主要向用户提供对健康监测系统传感器子系统采样频率、预警阈值进行设置，对报警信息的推送方式及对象进行设置，对系统的运行状态进行设置，对本系统的用户权限进行设置的功能。<br/><br/>'+
                
                '3、用户角色<br/>'+
                '本系统的用户角色分为三类，即管理人员、高级用户以及普通用户，权限如下：<br/>'+
                '（1）管理人员<br/>'+
                '可以进行系统的所有操作；<br/><br/>'+
                
                '（2）高级用户<br/>'+
                ' 具有对实时监测数据进行浏览，以及对历史监测数据记性查询、分析和下载的权限。<br/><br/>'+

                '（3）普通用户<br/>'+
                '具有对实时监测数据进行浏览的权限。'
    },
    CDXX:{
        title:'测点分布<br/>'+
              '航站楼健康监测系统中传感器子系统主要包括温度、应变、索力、倾角、加速度五类，各类型测点布置请选择查看。',
        list:[{name:'倾角仪详图',value:'images/cdxx1.gif',active:'active'},
              {name:'应变计详图',value:'images/cdxx2.gif',active:''},
              {name:'温度计详图',value:'images/cdxx3.gif',active:''},
              {name:'索力计详图',value:'images/cdxx4.gif',active:''},
              {name:'加速度计详图',value:'images/cdxx5.gif',active:''},
              {name:'视频监控详图',value:'images/cdxx6.gif',active:''},
            ]
    },
    XTLJ:{
      title:'数据流程<br/>'+
            '下图描述了系统总体数据流程',
      img:'images/mkgn_img2.png',
      list:[{name:'索力逻辑图',value:'images/xtlj1.gif',active:'active'},
            {name:'应变逻辑图',value:'images/xtlj2.gif',active:''},
            {name:'双向加速度逻辑图',value:'images/xtlj3.gif',active:''},
            {name:'单向加速度逻辑图',value:'images/xtlj4.gif',active:''},
            {name:'倾角逻辑图',value:'images/xtlj5.gif',active:''},
            {name:'温度逻辑图',value:'images/xtlj6.gif',active:''},
            {name:'视频监控逻辑图',value:'images/xtlj7.gif',active:''}
          ]
      
    },
    SBQD:{
      title:'设备清单',
      table:[
        {id:1,name:'倾角仪',type:'BWH526',use:'桅杆倾斜测量',num:10},
        {id:2,name:'单向加速度计',type:'CA-YD-188',use:'梭型梁的振动加速度测量',num:8},
        {id:3,name:'双向及速度计',type:'CA-YD-188-D',use:'桅杆的振动加速度测量',num:20},
        {id:4,name:'光纤光栅应变计',type:'FBG-DWM',use:'钢结构应变测量',num:36},
        {id:5,name:'光纤光栅应变计',type:'FBG-WD',use:'钢结构温度测量',num:26},
        {id:6,name:'磁通量索力计',type:'MCT-15',use:'拉索索力测量',num:8},
        {id:7,name:'16路视频监控设备',type:'HIKVISION',use:'视频采集',num:1},
        {id:8,name:'光电同步采集仪',type:'3D-i15-e32',use:'光电信号同步采集',num:1},
        {id:9,name:'16通道磁通量采集仪',type:'3D-M-16',use:'磁通量采集',num:1},
        {id:10,name:'高性能计算机',type:'E5-2620',use:'监测系统管理',num:1},
        {id:11,name:'16通道电类采集仪',type:'3D-e16',use:'电信号采集',num:1},
      ]
    }
  }

export const VideoObj = {
    g_szRecordType:'',g_iWndIndex :0,
    g_iSearchTimes : 0,g_iDownloadID : -1,g_tDownloadProcess: 0,
    g_bPTZAuto : false,g_tUpgrade : 0,g_bEnableDraw : false,
     // 显示操作信息
showOPInfo:(szInfo, status, xmlDoc) => {
  var szTip = "<div>" + VideoObj.dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss") + " " + szInfo;
  if (typeof status != "undefined" && status != 200) {
      var szStatusString = $(xmlDoc).find("statusString").eq(0).text();
      var szSubStatusCode = $(xmlDoc).find("subStatusCode").eq(0).text();
      if ("" === szSubStatusCode) {
          szTip += "(" + status + ", " + szStatusString + ")";
      } else {
          szTip += "(" + status + ", " + szSubStatusCode + ")";
      }
  }
  szTip += "</div>";

  $("#opinfo").html(szTip + $("#opinfo").html());
},

// 显示回调信息
showCBInfo:(szInfo)=> {
  szInfo = "<div>" + VideoObj.dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss") + " " + szInfo + "</div>";
  $("#cbinfo").html(szInfo + $("#cbinfo").html());
},

// 格式化时间
dateFormat:(oDate, fmt)=> {
  var o = {
      "M+": oDate.getMonth() + 1, //月份
      "d+": oDate.getDate(), //日
      "h+": oDate.getHours(), //小时
      "m+": oDate.getMinutes(), //分
      "s+": oDate.getSeconds(), //秒
      "q+": Math.floor((oDate.getMonth() + 3) / 3), //季度
      "S": oDate.getMilliseconds()//毫秒
  };
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (oDate.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
  }
  return fmt;
},

// 获取窗口尺寸
getWindowSize:()=> {
  var nWidth = $(this).width() + $(this).scrollLeft(),
      nHeight = $(this).height() + $(this).scrollTop();

  return {width: nWidth, height: nHeight};
},

// 打开选择框 0：文件夹  1：文件
clickOpenFileDlg:(id, iType)=> {
  var szDirPath = WebVideoCtrl.I_OpenFileDlg(iType);
  
  if (szDirPath != -1 && szDirPath != "" && szDirPath != null) {
      $("#" + id).val(szDirPath);
  }
},

// 获取本地参数
clickGetLocalCfg:()=> {
  var xmlDoc = WebVideoCtrl.I_GetLocalCfg();

  if (xmlDoc != null) {
      $("#netsPreach").val($(xmlDoc).find("BuffNumberType").eq(0).text());
      $("#wndSize").val($(xmlDoc).find("PlayWndType").eq(0).text());
      $("#rulesInfo").val($(xmlDoc).find("IVSMode").eq(0).text());
      $("#captureFileFormat").val($(xmlDoc).find("CaptureFileFormat").eq(0).text());
      $("#packSize").val($(xmlDoc).find("PackgeSize").eq(0).text());
      $("#recordPath").val($(xmlDoc).find("RecordPath").eq(0).text());
      $("#downloadPath").val($(xmlDoc).find("DownloadPath").eq(0).text());
      $("#previewPicPath").val($(xmlDoc).find("CapturePath").eq(0).text());
      $("#playbackPicPath").val($(xmlDoc).find("PlaybackPicPath").eq(0).text());
      $("#devicePicPath").val($(xmlDoc).find("DeviceCapturePath").eq(0).text());
      $("#playbackFilePath").val($(xmlDoc).find("PlaybackFilePath").eq(0).text());
      $("#protocolType").val($(xmlDoc).find("ProtocolType").eq(0).text());

      VideoObj.showOPInfo("本地配置获取成功！",null,null);
  } else {
      VideoObj.showOPInfo("本地配置获取失败！",null,null);
  }
},

// 设置本地参数
clickSetLocalCfg:() =>{
  var arrXml = [],
      szInfo = "";
  
  arrXml.push("<LocalConfigInfo>");
  arrXml.push("<PackgeSize>" + $("#packSize").val() + "</PackgeSize>");
  arrXml.push("<PlayWndType>" + $("#wndSize").val() + "</PlayWndType>");
  arrXml.push("<BuffNumberType>" + $("#netsPreach").val() + "</BuffNumberType>");
  arrXml.push("<RecordPath>" + $("#recordPath").val() + "</RecordPath>");
  arrXml.push("<CapturePath>" + $("#previewPicPath").val() + "</CapturePath>");
  arrXml.push("<PlaybackFilePath>" + $("#playbackFilePath").val() + "</PlaybackFilePath>");
  arrXml.push("<PlaybackPicPath>" + $("#playbackPicPath").val() + "</PlaybackPicPath>");
  arrXml.push("<DeviceCapturePath>" + $("#devicePicPath").val() + "</DeviceCapturePath>");
  arrXml.push("<DownloadPath>" + $("#downloadPath").val() + "</DownloadPath>");
  arrXml.push("<IVSMode>" + $("#rulesInfo").val() + "</IVSMode>");
  arrXml.push("<CaptureFileFormat>" + $("#captureFileFormat").val() + "</CaptureFileFormat>");
  arrXml.push("<ProtocolType>" + $("#protocolType").val() + "</ProtocolType>");
  arrXml.push("</LocalConfigInfo>");

  var iRet = WebVideoCtrl.I_SetLocalCfg(arrXml.join(""));

  if (0 == iRet) {
      szInfo = "本地配置设置成功！";
  } else {
      szInfo = "本地配置设置失败！";
  }
  VideoObj.showOPInfo(szInfo,null,null);
},

// 窗口分割数
changeWndNum:(iType)=> {
  iType = parseInt(iType, 10);
  WebVideoCtrl.I_ChangeWndNum(iType);
},

// 登录
clickLogin:()=> {
  var szIP = $("#loginip").val(),
      szPort = $("#port").val(),
      szUsername = $("#username").val(),
      szPassword = $("#password").val();

  if ("" == szIP || "" == szPort) {
      return;
  }

  var szDeviceIdentify = szIP + "_" + szPort;
  var iRet = WebVideoCtrl.I_Login(szIP, 1, szPort, szUsername, szPassword, {
      success: function (xmlDoc) {           
          $("#ip").prepend("<option value='" + szDeviceIdentify + "'>" + szDeviceIdentify + "</option>");
          setTimeout( () =>{
              $("#ip").val(szDeviceIdentify);
              VideoObj.getChannelInfo();
              VideoObj.getDevicePort();
          }, 10);
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 登录失败！", status, xmlDoc);
      }
  });
  if (-1 == iRet) {
      VideoObj.showOPInfo(szDeviceIdentify + " 已登录过！",null,null);
  }
},

// 退出
clickLogout:()=> {
  var szDeviceIdentify = $("#ip").val(),
      szInfo = "";

  if (null == szDeviceIdentify) {
      return;
  }
  var iRet = WebVideoCtrl.I_Logout(szDeviceIdentify);
  if (0 == iRet) {
      szInfo = "退出成功！";

      $("#ip option[value='" + szDeviceIdentify + "']").remove();
      VideoObj.getChannelInfo();
      VideoObj.getDevicePort();
  } else {
      szInfo = "退出失败！";
  }
  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
},

// 获取设备信息
clickGetDeviceInfo:()=> {
  var szDeviceIdentify = $("#ip").val();

  if (null == szDeviceIdentify) {
      return;
  }

  WebVideoCtrl.I_GetDeviceInfo(szDeviceIdentify, {
      success: function (xmlDoc) {
          var arrStr = [];
          arrStr.push("设备名称：" + $(xmlDoc).find("deviceName").eq(0).text() + "\r\n");
          arrStr.push("设备ID：" + $(xmlDoc).find("deviceID").eq(0).text() + "\r\n");
          arrStr.push("型号：" + $(xmlDoc).find("model").eq(0).text() + "\r\n");
          arrStr.push("设备序列号：" + $(xmlDoc).find("serialNumber").eq(0).text() + "\r\n");
          arrStr.push("MAC地址：" + $(xmlDoc).find("macAddress").eq(0).text() + "\r\n");
          arrStr.push("主控版本：" + $(xmlDoc).find("firmwareVersion").eq(0).text() + " " + $(xmlDoc).find("firmwareReleasedDate").eq(0).text() + "\r\n");
          arrStr.push("编码版本：" + $(xmlDoc).find("encoderVersion").eq(0).text() + " " + $(xmlDoc).find("encoderReleasedDate").eq(0).text() + "\r\n");
          
          VideoObj.showOPInfo(szDeviceIdentify + " 获取设备信息成功！",null,null);
          alert(arrStr.join(""));
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 获取设备信息失败！", status, xmlDoc);
      }
  });
},

// 获取通道
getChannelInfo:()=> {
  var szDeviceIdentify = $("#ip").val(),
      oSel = $("#channels").empty();

  if (null == szDeviceIdentify) {
      return;
  }

  // 模拟通道
  WebVideoCtrl.I_GetAnalogChannelInfo(szDeviceIdentify, {
      async: false,
      success: function (xmlDoc) {
          var oChannels = $(xmlDoc).find("VideoInputChannel");

          $.each(oChannels, function (i) {
              var id = $(this).find("id").eq(0).text(),
                  name = $(this).find("name").eq(0).text();
              if ("" == name) {
                  name = "Camera " + (i < 9 ? "0" + (i + 1) : (i + 1));
              }
              oSel.append("<option value='" + id + "' bZero='false'>" + name + "</option>");
          });
          VideoObj.showOPInfo(szDeviceIdentify + " 获取模拟通道成功！",null,null);
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 获取模拟通道失败！", status, xmlDoc);
      }
  });
  // 数字通道
  WebVideoCtrl.I_GetDigitalChannelInfo(szDeviceIdentify, {
      async: false,
      success: function (xmlDoc) {
          var oChannels = $(xmlDoc).find("InputProxyChannelStatus");

          $.each(oChannels, function (i) {
              var id = $(this).find("id").eq(0).text(),
                  name = $(this).find("name").eq(0).text(),
                  online = $(this).find("online").eq(0).text();
              if ("false" == online) {// 过滤禁用的数字通道
                  return true;
              }
              if ("" == name) {
                  name = "IPCamera " + (i < 9 ? "0" + (i + 1) : (i + 1));
              }
              oSel.append("<option value='" + id + "' bZero='false'>" + name + "</option>");
          });
          VideoObj.showOPInfo(szDeviceIdentify + " 获取数字通道成功！",null,null);
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 获取数字通道失败！", status, xmlDoc);
      }
  });
  // 零通道
  WebVideoCtrl.I_GetZeroChannelInfo(szDeviceIdentify, {
      async: false,
      success: function (xmlDoc) {
          var oChannels = $(xmlDoc).find("ZeroVideoChannel");
          
          $.each(oChannels, function (i) {
              var id = $(this).find("id").eq(0).text(),
                  name = $(this).find("name").eq(0).text();
              if ("" == name) {
                  name = "Zero Channel " + (i < 9 ? "0" + (i + 1) : (i + 1));
              }
              if ("true" == $(this).find("enabled").eq(0).text()) {// 过滤禁用的零通道
                  oSel.append("<option value='" + id + "' bZero='true'>" + name + "</option>");
              }
          });
          VideoObj.showOPInfo(szDeviceIdentify + " 获取零通道成功！",null,null);
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 获取零通道失败！", status, xmlDoc);
      }
  });
},

// 获取端口
getDevicePort:()=> {
  var szDeviceIdentify = $("#ip").val();

  if (null == szDeviceIdentify) {
      return;
  }

  var oPort = WebVideoCtrl.I_GetDevicePort(szDeviceIdentify);
  if (oPort != null) {
      $("#deviceport").val(oPort.iDevicePort);
      $("#rtspport").val(oPort.iRtspPort);

      VideoObj.showOPInfo(szDeviceIdentify + " 获取端口成功！",null,null);
  } else {
      VideoObj.showOPInfo(szDeviceIdentify + " 获取端口失败！",null,null);
  }
},

// 获取数字通道
clickGetDigitalChannelInfo:()=> {
  var szDeviceIdentify = $("#ip").val(),
      iAnalogChannelNum = 0;

  $("#digitalchannellist").empty();

  if (null == szDeviceIdentify) {
      return;
  }

  // 模拟通道
  WebVideoCtrl.I_GetAnalogChannelInfo(szDeviceIdentify, {
      async: false,
      success: function (xmlDoc) {
          iAnalogChannelNum = $(xmlDoc).find("VideoInputChannel").length;
      },
      error: function () {
          
      }
  });

  // 数字通道
  WebVideoCtrl.I_GetDigitalChannelInfo(szDeviceIdentify, {
      async: false,
      success: function (xmlDoc) {
          var oChannels = $(xmlDoc).find("InputProxyChannelStatus");
          
          $.each(oChannels, function () {
              var id = parseInt($(this).find("id").eq(0).text(), 10),
                  ipAddress = $(this).find("ipAddress").eq(0).text(),
                  srcInputPort = $(this).find("srcInputPort").eq(0).text(),
                  managePortNo = $(this).find("managePortNo").eq(0).text(),
                  online = $(this).find("online").eq(0).text(),
                  proxyProtocol = $(this).find("proxyProtocol").eq(0).text();
                          
              var objTr = $("#digitalchannellist").get(0).insertRow(-1);
              var objTd = objTr.insertCell(0);
              objTd.innerHTML = (id - iAnalogChannelNum) < 10 ? "D0" + (id - iAnalogChannelNum) : "D" + (id - iAnalogChannelNum);
              objTd = objTr.insertCell(1);
              objTd.width = "25%";
              objTd.innerHTML = ipAddress;
              objTd = objTr.insertCell(2);
              objTd.width = "15%";
              objTd.innerHTML = srcInputPort;
              objTd = objTr.insertCell(3);
              objTd.width = "20%";
              objTd.innerHTML = managePortNo;
              objTd = objTr.insertCell(4);
              objTd.width = "15%";
              objTd.innerHTML = "true" == online ? "在线" : "离线";
              objTd = objTr.insertCell(5);
              objTd.width = "25%";
              objTd.innerHTML = proxyProtocol;
          });
          VideoObj.showOPInfo(szDeviceIdentify + " 获取数字通道成功！",null,null);
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 没有数字通道！", status, xmlDoc);
      }
  });
},

// 开始预览
clickStartRealPlay:(iStreamType,winIndex,chId)=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szDeviceIdentify = $("#ip").val(),
      iRtspPort = parseInt($("#rtspport").val(), 10),
      iChannelID = parseInt($("#channels").val(), 10),
      bZeroChannel = $("#channels option").eq($("#channels").get(0).selectedIndex).attr("bZero") == "true" ? true : false,
      szInfo = "";

  if ("undefined" === typeof iStreamType) {
      iStreamType = parseInt($("#streamtype").val(), 10);
  }

  if (null == szDeviceIdentify) {
      return;
  }

  var startRealPlay = function () {
      if(winIndex && chId){
        WebVideoCtrl.I_StartRealPlay(szDeviceIdentify, {
          iWndIndex:winIndex,
          iRtspPort: iRtspPort,
          iStreamType: iStreamType,
          iChannelID: chId,
          bZeroChannel: bZeroChannel,
          success: function () {
              szInfo = "开始预览成功！";
              //VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo);
          },
          error: function (status, xmlDoc) {
              if (403 === status) {
                  szInfo = "设备不支持Websocket取流！";
              } else {
                  szInfo = "开始预览失败！";
              }
              //VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo);
          }
      });
      }else{
        WebVideoCtrl.I_StartRealPlay(szDeviceIdentify, {
            iRtspPort: iRtspPort,
            iStreamType: iStreamType,
            iChannelID: iChannelID,
            bZeroChannel: bZeroChannel,
            success: function () {
                szInfo = "开始预览成功！";
                //VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo);
            },
            error: function (status, xmlDoc) {
                if (403 === status) {
                    szInfo = "设备不支持Websocket取流！";
                } else {
                    szInfo = "开始预览失败！";
                }
                //VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo);
            }
        });
      }
      
  };

  if (oWndInfo != null) {// 已经在播放了，先停止
      WebVideoCtrl.I_Stop({
          success: function () {
              startRealPlay();
          }
      });
  } else {
      startRealPlay();
  }
},

// 停止预览
clickStopRealPlay:(winIndex)=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      if(winIndex){
        WebVideoCtrl.I_Stop({
            iWndIndex:winIndex,
            success: function () {
                szInfo = "停止预览成功！";
                VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
            },
            error: function () {
                szInfo = "停止预览失败！";
                VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
            }
        });
      }else{
        WebVideoCtrl.I_Stop({
            success: function () {
                szInfo = "停止预览成功！";
                VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
            },
            error: function () {
                szInfo = "停止预览失败！";
                VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
            }
        });
      }
      
  }
},

// 打开声音
clickOpenSound:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      var allWndInfo = WebVideoCtrl.I_GetWindowStatus();
      // 循环遍历所有窗口，如果有窗口打开了声音，先关闭
      for (var i = 0, iLen = allWndInfo.length; i < iLen; i++) {
          oWndInfo = allWndInfo[i];
          if (oWndInfo.bSound) {
              WebVideoCtrl.I_CloseSound(oWndInfo.iIndex);
              break;
          }
      }

      var iRet = WebVideoCtrl.I_OpenSound();

      if (0 == iRet) {
          szInfo = "打开声音成功！";
      } else {
          szInfo = "打开声音失败！";
      }
      VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
  }
},

// 关闭声音
clickCloseSound:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      var iRet = WebVideoCtrl.I_CloseSound();
      if (0 == iRet) {
          szInfo = "关闭声音成功！";
      } else {
          szInfo = "关闭声音失败！";
      }
      VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
  }
},

// 设置音量
clickSetVolume:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      iVolume = parseInt($("#volume").val(), 10),
      szInfo = "";

  if (oWndInfo != null) {
      var iRet = WebVideoCtrl.I_SetVolume(iVolume);
      if (0 == iRet) {
          szInfo = "音量设置成功！";
      } else {
          szInfo = "音量设置失败！";
      }
      VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
  }
},

// 抓图
clickCapturePic:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      var xmlDoc = WebVideoCtrl.I_GetLocalCfg();
      var szCaptureFileFormat = "0";
      if (xmlDoc != null) {
          szCaptureFileFormat = $(xmlDoc).find("CaptureFileFormat").eq(0).text();
      }

      var szChannelID = $("#channels").val();
      var szPicName = oWndInfo.szDeviceIdentify + "_" + szChannelID + "_" + new Date().getTime();
      
      szPicName += ("0" === szCaptureFileFormat) ? ".jpg": ".bmp";

      var iRet = WebVideoCtrl.I_CapturePic(szPicName, {
          bDateDir: true  //是否生成日期文件
      });
      if (0 == iRet) {
          szInfo = "抓图成功！";
      } else {
          szInfo = "抓图失败！";
      }
      VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
  }
},

// 开始录像
clickStartRecord:(szType)=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  VideoObj.g_szRecordType = szType;

  if (oWndInfo != null) {
      var szChannelID = $("#channels").val(),
          szFileName = oWndInfo.szDeviceIdentify + "_" + szChannelID + "_" + new Date().getTime();

      WebVideoCtrl.I_StartRecord(szFileName, {
          bDateDir: true, //是否生成日期文件
          success: function () {
              if ('realplay' === szType) {
                  szInfo = "开始录像成功！";
              } else if ('playback' === szType) {
                  szInfo = "开始剪辑成功！";
              }
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          },
          error: function () {
              if ('realplay' === szType) {
                  szInfo = "开始录像失败！";
              } else if ('playback' === szType) {
                  szInfo = "开始剪辑失败！";
              }
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          }
      });
  }
},

// 停止录像
clickStopRecord:(szType, iWndIndex)=> {
  if ("undefined" === typeof iWndIndex) {
      iWndIndex = VideoObj.g_iWndIndex;
  }
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      WebVideoCtrl.I_StopRecord({
          success: function () {
              if ('realplay' === szType) {
                  szInfo = "停止录像成功！";
              } else if ('playback' === szType) {
                  szInfo = "停止剪辑成功！";
              }
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          },
          error: function () {
              if ('realplay' === szType) {
                  szInfo = "停止录像失败！";
              } else if ('playback' === szType) {
                  szInfo = "停止剪辑失败！";
              }
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          }
      });
  }
},

// 获取对讲通道
clickGetAudioInfo:()=> {
  var szDeviceIdentify = $("#ip").val();

  if (null == szDeviceIdentify) {
      return;
  }

  WebVideoCtrl.I_GetAudioInfo(szDeviceIdentify, {
      success: function (xmlDoc) {
          var oAudioChannels = $(xmlDoc).find("TwoWayAudioChannel"),
              oSel = $("#audiochannels").empty();
          $.each(oAudioChannels, function () {
              var id = $(this).find("id").eq(0).text();

              oSel.append("<option value='" + id + "'>" + id + "</option>");
          });
          VideoObj.showOPInfo(szDeviceIdentify + " 获取对讲通道成功！",null,null);
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 获取对讲通道失败！", status, xmlDoc);
      }
  });
},

// 开始对讲
clickStartVoiceTalk:()=> {
  var szDeviceIdentify = $("#ip").val(),
      iAudioChannel = parseInt($("#audiochannels").val(), 10),
      szInfo = "";

  if (null == szDeviceIdentify) {
      return;
  }

  if (isNaN(iAudioChannel)) {
      alert("请选择对讲通道！");
      return;
  }

  var iRet = WebVideoCtrl.I_StartVoiceTalk(szDeviceIdentify, iAudioChannel);

  if (0 == iRet) {
      szInfo = "开始对讲成功！";
  } else {
      szInfo = "开始对讲失败！";
  }
  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
},

// 停止对讲
clickStopVoiceTalk:()=> {
  var szDeviceIdentify = $("#ip").val(),
      iRet = WebVideoCtrl.I_StopVoiceTalk(),
      szInfo = "";

  if (null == szDeviceIdentify) {
      return;
  }

  if (0 == iRet) {
      szInfo = "停止对讲成功！";
  } else {
      szInfo = "停止对讲失败！";
  }
  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
},

// 启用电子放大
clickEnableEZoom:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      var iRet = WebVideoCtrl.I_EnableEZoom();
      if (0 == iRet) {
          szInfo = "启用电子放大成功！";
      } else {
          szInfo = "启用电子放大失败！";
      }
      VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
  }
},

// 禁用电子放大
clickDisableEZoom:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      var iRet = WebVideoCtrl.I_DisableEZoom();
      if (0 == iRet) {
          szInfo = "禁用电子放大成功！";
      } else {
          szInfo = "禁用电子放大失败！";
      }
      VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
  }
},

// 启用3D放大
clickEnable3DZoom:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      var iRet = WebVideoCtrl.I_Enable3DZoom();
      if (0 == iRet) {
          szInfo = "启用3D放大成功！";
      } else {
          szInfo = "启用3D放大失败！";
      }
      VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
  }
},

// 禁用3D放大
clickDisable3DZoom:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      var iRet = WebVideoCtrl.I_Disable3DZoom();
      if (0 == iRet) {
          szInfo = "禁用3D放大成功！";
      } else {
          szInfo = "禁用3D放大失败！";
      }
      VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
  }
},

// 全屏
clickFullScreen:()=> {
  WebVideoCtrl.I_FullScreen(true);
},

// PTZ控制 9为自动，1,2,3,4,5,6,7,8为方向PTZ
mouseDownPTZControl:(iPTZIndex)=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      bZeroChannel = $("#channels option").eq($("#channels").get(0).selectedIndex).attr("bZero") == "true" ? true : false,
      iPTZSpeed = $("#ptzspeed").val();

  if (bZeroChannel) {// 零通道不支持云台
      return;
  }
  
  if (oWndInfo != null) {
      if (9 == iPTZIndex && VideoObj.g_bPTZAuto) {
          iPTZSpeed = 0;// 自动开启后，速度置为0可以关闭自动
      } else {
          VideoObj.g_bPTZAuto = false;// 点击其他方向，自动肯定会被关闭
      }

      WebVideoCtrl.I_PTZControl(iPTZIndex, false, {
          iPTZSpeed: iPTZSpeed,
          success: function (xmlDoc) {
              if (9 == iPTZIndex && VideoObj.g_bPTZAuto) {
                  VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 停止云台成功！",null,null);
              } else {
                  VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 开启云台成功！",null,null);
              }
              if (9 == iPTZIndex) {
                  VideoObj.g_bPTZAuto = !VideoObj.g_bPTZAuto;
              }
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 开启云台失败！", status, xmlDoc);
          }
      });
  }
},

// 方向PTZ停止
mouseUpPTZControl:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(1, true, {
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 停止云台成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 停止云台失败！", status, xmlDoc);
          }
      });
  }
},

// 设置预置点
clickSetPreset:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      iPresetID = parseInt($("#preset").val(), 10);

  if (oWndInfo != null) {
      WebVideoCtrl.I_SetPreset(iPresetID, {
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 设置预置点成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 设置预置点失败！", status, xmlDoc);
          }
      });
  }
},

// 调用预置点
clickGoPreset:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      iPresetID = parseInt($("#preset").val(), 10);

  if (oWndInfo != null) {
      WebVideoCtrl.I_GoPreset(iPresetID, {
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 调用预置点成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 调用预置点失败！", status, xmlDoc);
          }
      });
  }
},

// 搜索录像
clickRecordSearch:(iType)=> {
  var szDeviceIdentify = $("#ip").val(),
      iChannelID = parseInt($("#channels").val(), 10),
      bZeroChannel = $("#channels option").eq($("#channels").get(0).selectedIndex).attr("bZero") == "true" ? true : false,
      iStreamType = parseInt($("#record_streamtype").val(), 10),
      szStartTime = $("#starttime").val(),
      szEndTime = $("#endtime").val();

  if (null == szDeviceIdentify) {
      return;
  }

  if (bZeroChannel) {// 零通道不支持录像搜索
      return;
  }

  if (0 == iType) {// 首次搜索
      $("#searchlist").empty();
      VideoObj.g_iSearchTimes = 0;
  }

  WebVideoCtrl.I_RecordSearch(szDeviceIdentify, iChannelID, szStartTime, szEndTime, {
      iStreamType: iStreamType,
      iSearchPos: VideoObj.g_iSearchTimes * 40,
      success: function (xmlDoc) {
          if ("MORE" === $(xmlDoc).find("responseStatusStrg").eq(0).text()) {
              
              for(var i = 0, nLen = $(xmlDoc).find("searchMatchItem").length; i < nLen; i++) {
                  var szPlaybackURI = $(xmlDoc).find("playbackURI").eq(i).text();
                  if(szPlaybackURI.indexOf("name=") < 0) {
                      break;
                  }
                  var szStartTime = $(xmlDoc).find("startTime").eq(i).text();
                  var szEndTime = $(xmlDoc).find("endTime").eq(i).text();
                  var szFileName = szPlaybackURI.substring(szPlaybackURI.indexOf("name=") + 5, szPlaybackURI.indexOf("&size="));

                  var objTr = $("#searchlist").get(0).insertRow(-1);
                  var objTd = objTr.insertCell(0);
                  objTd.id = "downloadTd" + i;
                  objTd.innerHTML = VideoObj.g_iSearchTimes * 40 + (i + 1);
                  objTd = objTr.insertCell(1);
                  objTd.width = "30%";
                  objTd.innerHTML = szFileName;
                  objTd = objTr.insertCell(2);
                  objTd.width = "30%";
                  objTd.innerHTML = (szStartTime.replace("T", " ")).replace("Z", "");
                  objTd = objTr.insertCell(3);
                  objTd.width = "30%";
                  objTd.innerHTML = (szEndTime.replace("T", " ")).replace("Z", "");
                  objTd = objTr.insertCell(4);
                  objTd.width = "10%";
                  objTd.innerHTML = "<a href='javascript:;' onclick='clickStartDownloadRecord(" + (i + VideoObj.g_iSearchTimes * 40) + ");'>下载</a>";
                  $("#downloadTd" + (i + VideoObj.g_iSearchTimes * 40)).data("fileName", szFileName);
                  $("#downloadTd" + (i + VideoObj.g_iSearchTimes * 40)).data("playbackURI", szPlaybackURI);
              }

              VideoObj.g_iSearchTimes++;
              VideoObj.clickRecordSearch(1);// 继续搜索
          } else if ("OK" === $(xmlDoc).find("responseStatusStrg").eq(0).text()) {
              var iLength = $(xmlDoc).find("searchMatchItem").length;
              for(var i = 0; i < iLength; i++) {
                  var szPlaybackURI = $(xmlDoc).find("playbackURI").eq(i).text();
                  if(szPlaybackURI.indexOf("name=") < 0) {
                      break;
                  }
                  var szStartTime = $(xmlDoc).find("startTime").eq(i).text();
                  var szEndTime = $(xmlDoc).find("endTime").eq(i).text();
                  var szFileName = szPlaybackURI.substring(szPlaybackURI.indexOf("name=") + 5, szPlaybackURI.indexOf("&size="));

                  var objTr = $("#searchlist").get(0).insertRow(-1);
                  var objTd = objTr.insertCell(0);
                  objTd.id = "downloadTd" + i;
                  objTd.innerHTML = VideoObj.g_iSearchTimes * 40 + (i + 1);
                  objTd = objTr.insertCell(1);
                  objTd.width = "30%";
                  objTd.innerHTML = szFileName;
                  objTd = objTr.insertCell(2);
                  objTd.width = "30%";
                  objTd.innerHTML = (szStartTime.replace("T", " ")).replace("Z", "");
                  objTd = objTr.insertCell(3);
                  objTd.width = "30%";
                  objTd.innerHTML = (szEndTime.replace("T", " ")).replace("Z", "");
                  objTd = objTr.insertCell(4);
                  objTd.width = "10%";
                  objTd.innerHTML = "<a href='javascript:;' onclick='clickStartDownloadRecord(" + (i + VideoObj.g_iSearchTimes * 40) + ");'>下载</a>";
                  $("#downloadTd" + (i + VideoObj.g_iSearchTimes * 40)).data("fileName", szFileName);
                  $("#downloadTd" + (i + VideoObj.g_iSearchTimes * 40)).data("playbackURI", szPlaybackURI);
              }
              VideoObj.showOPInfo(szDeviceIdentify + " 搜索录像文件成功！",null,null);
          } else if("NO MATCHES" === $(xmlDoc).find("responseStatusStrg").eq(0).text()) {
              setTimeout(function() {
                  VideoObj.showOPInfo(szDeviceIdentify + " 没有录像文件！",null,null);
              }, 50);
          }
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 搜索录像文件失败！", status, xmlDoc);
      }
  });
},

// 开始回放
clickStartPlayback:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szDeviceIdentify = $("#ip").val(),
      iRtspPort = parseInt($("#rtspport").val(), 10),
      iStreamType = parseInt($("#record_streamtype").val(), 10),
      bZeroChannel = $("#channels option").eq($("#channels").get(0).selectedIndex).attr("bZero") == "true" ? true : false,
      iChannelID = parseInt($("#channels").val(), 10),
      szStartTime = $("#starttime").val(),
      szEndTime = $("#endtime").val(),
      szInfo = "",
      bChecked = $("#transstream").prop("checked"),
      iRet = -1;

  if (null == szDeviceIdentify) {
      return;
  }

  if (bZeroChannel) {// 零通道不支持回放
      return;
  }

  var startPlayback = function () {
      if (bChecked) {// 启用转码回放
          var oTransCodeParam = {
              TransFrameRate: "14",// 0：全帧率，5：1，6：2，7：4，8：6，9：8，10：10，11：12，12：16，14：15，15：18，13：20，16：22
              TransResolution: "1",// 255：Auto，3：4CIF，2：QCIF，1：CIF
              TransBitrate: "19"// 2：32K，3：48K，4：64K，5：80K，6：96K，7：128K，8：160K，9：192K，10：224K，11：256K，12：320K，13：384K，14：448K，15：512K，16：640K，17：768K，18：896K，19：1024K，20：1280K，21：1536K，22：1792K，23：2048K，24：3072K，25：4096K，26：8192K
          };
          WebVideoCtrl.I_StartPlayback(szDeviceIdentify, {
              iRtspPort: iRtspPort,
              iStreamType: iStreamType,
              iChannelID: iChannelID,
              szStartTime: szStartTime,
              szEndTime: szEndTime,
              oTransCodeParam: oTransCodeParam,
              success: function () {
                  szInfo = "开始回放成功！";
                  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
              },
              error: function (status, xmlDoc) {
                  if (403 === status) {
                      szInfo = "设备不支持Websocket取流！";
                  } else {
                      szInfo = "开始回放失败！";
                  }
                  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
              }
          });
      } else {
          WebVideoCtrl.I_StartPlayback(szDeviceIdentify, {
              iRtspPort: iRtspPort,
              iStreamType: iStreamType,
              iChannelID: iChannelID,
              szStartTime: szStartTime,
              szEndTime: szEndTime,
              success: function () {
                  szInfo = "开始回放成功！";
                  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
              },
              error: function (status, xmlDoc) {
                  if (403 === status) {
                      szInfo = "设备不支持Websocket取流！";
                  } else {
                      szInfo = "开始回放失败！";
                  }
                  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
              }
          });
      }
  };

  if (oWndInfo != null) {// 已经在播放了，先停止
      WebVideoCtrl.I_Stop({
          success: function () {
              startPlayback();
          }
      });
  } else {
      startPlayback();
  }
},

// 停止回放
clickStopPlayback:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      WebVideoCtrl.I_Stop({
          success: function () {
              szInfo = "停止回放成功！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          },
          error: function () {
              szInfo = "停止回放失败！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          }
      });
  }
},

// 开始倒放
clickReversePlayback:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szDeviceIdentify = $("#ip").val(),
      iRtspPort = parseInt($("#rtspport").val(), 10),
      iStreamType = parseInt($("#record_streamtype").val(), 10),
      bZeroChannel = $("#channels option").eq($("#channels").get(0).selectedIndex).attr("bZero") == "true" ? true : false,
      iChannelID = parseInt($("#channels").val(), 10),
      szStartTime = $("#starttime").val(),
      szEndTime = $("#endtime").val(),
      szInfo = "";

  if (null == szDeviceIdentify) {
      return;
  }

  if (bZeroChannel) {// 零通道不支持倒放
      return;
  }

  var reversePlayback = function () {
      var iRet = WebVideoCtrl.I_ReversePlayback(szDeviceIdentify, {
          iRtspPort: iRtspPort,
          iStreamType: iStreamType,
          iChannelID: iChannelID,
          szStartTime: szStartTime,
          szEndTime: szEndTime
      });

      if (0 == iRet) {
          szInfo = "开始倒放成功！";
      } else {
          szInfo = "开始倒放失败！";
      }
      VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
  };

  if (oWndInfo != null) {// 已经在播放了，先停止
      WebVideoCtrl.I_Stop({
          success: function () {
              reversePlayback();
          }
      });
  } else {
      reversePlayback();
  }
},

// 单帧
clickFrame:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      WebVideoCtrl.I_Frame({
          success: function () {
              szInfo = "单帧播放成功！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          },
          error: function () {
              szInfo = "单帧播放失败！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          }
      });
  }
},

// 暂停
clickPause:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      WebVideoCtrl.I_Pause({
          success: function () {
              szInfo = "暂停成功！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          },
          error: function () {
              szInfo = "暂停失败！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          }
      });
  }
},

// 恢复
clickResume:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      WebVideoCtrl.I_Resume({
          success: function () {
              szInfo = "恢复成功！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          },
          error: function () {
              szInfo = "恢复失败！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          }
      });
  }
},

// 慢放
clickPlaySlow:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      WebVideoCtrl.I_PlaySlow({
          success: function () {
              szInfo = "慢放成功！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          },
          error: function () {
              szInfo = "慢放失败！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          }
      });
  }
},

// 快放
clickPlayFast:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex),
      szInfo = "";

  if (oWndInfo != null) {
      WebVideoCtrl.I_PlayFast({
          success: function () {
              szInfo = "快放成功！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          },
          error: function () {
              szInfo = "快放失败！";
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " " + szInfo,null,null);
          }
      });
  }
},

// OSD时间
clickGetOSDTime:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);
  
  if (oWndInfo != null) {
      var szTime = WebVideoCtrl.I_GetOSDTime({
          success: function (szOSDTime) {
              $("#osdtime").val(szOSDTime);
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 获取OSD时间成功！",null,null);
          },
          error: function () {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 获取OSD时间失败！",null,null);
          }
      });
  }
},

// 下载录像
clickStartDownloadRecord:(i)=> {
  var szDeviceIdentify = $("#ip").val(),
      szChannelID = $("#channels").val(),
      szFileName = $("#downloadTd" + i).data("fileName"),
      szPlaybackURI = $("#downloadTd" + i).data("playbackURI");

  if (null == szDeviceIdentify) {
      return;
  }

  VideoObj.g_iDownloadID = WebVideoCtrl.I_StartDownloadRecord(szDeviceIdentify, szPlaybackURI, szFileName, {
      bDateDir: true  //是否生成日期文件
  });

  if (VideoObj.g_iDownloadID < 0) {
      var iErrorValue = WebVideoCtrl.I_GetLastError();
      if (34 == iErrorValue) {
        VideoObj.showOPInfo(szDeviceIdentify + " 已下载！",null,null);
      } else if (33 == iErrorValue) {
        VideoObj.showOPInfo(szDeviceIdentify + " 空间不足！",null,null);
      } else {
        VideoObj.showOPInfo(szDeviceIdentify + " 下载失败！",null,null);
      }
  } else {
      $("<div id='downProcess' class='freeze'></div>").appendTo("body");
      VideoObj.g_tDownloadProcess = setInterval("downProcess(" + i + ")", 1000);
  }
},
// 下载进度
downProcess:()=> {
  var iStatus = WebVideoCtrl.I_GetDownloadStatus(VideoObj.g_iDownloadID);
  if (0 == iStatus) {
      $("#downProcess").css({
          width: $("#searchlist").width() + "px",
          height: "100px",
          lineHeight: "100px",
          left: $("#searchdiv").offset().left + "px",
          top: $("#searchdiv").offset().top + "px"
      });
      var iProcess = WebVideoCtrl.I_GetDownloadProgress(VideoObj.g_iDownloadID);
      if (iProcess < 0) {
          clearInterval(VideoObj.g_tDownloadProcess);
          VideoObj.g_tDownloadProcess = 0;
          VideoObj.g_iDownloadID = -1;
      } else if (iProcess < 100) {
          $("#downProcess").text(iProcess + "%");
      } else {
          $("#downProcess").text("100%");
          setTimeout(function () {
              $("#downProcess").remove();
          }, 1000);

          WebVideoCtrl.I_StopDownloadRecord(VideoObj.g_iDownloadID);

          VideoObj.showOPInfo("录像下载完成！",null,null);
          clearInterval(VideoObj.g_tDownloadProcess);
          VideoObj.g_tDownloadProcess = 0;
          VideoObj.g_iDownloadID = -1;
      }
  } else {
      WebVideoCtrl.I_StopDownloadRecord(VideoObj.g_iDownloadID);

      clearInterval(VideoObj.g_tDownloadProcess);
      VideoObj.g_tDownloadProcess = 0;
      VideoObj.g_iDownloadID = -1;
  }
},

// 导出配置文件
clickExportDeviceConfig:()=> {
  var szDeviceIdentify = $("#ip").val(),
      szInfo = "";

  if (null == szDeviceIdentify) {
      return;
  }

  var iRet = WebVideoCtrl.I_ExportDeviceConfig(szDeviceIdentify);

  if (0 == iRet) {
      szInfo = "导出配置文件成功！";
  } else {
      szInfo = "导出配置文件失败！";
  }
  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
},

// 导入配置文件
clickImportDeviceConfig:()=> {
  var szDeviceIdentify = $("#ip").val(),
      szFileName = $("#configFile").val();

  if (null == szDeviceIdentify) {
      return;
  }

  if ("" == szFileName) {
      alert("请选择配置文件！");
      return;
  }

  var iRet = WebVideoCtrl.I_ImportDeviceConfig(szDeviceIdentify, szFileName);

  if (0 == iRet) {
      WebVideoCtrl.I_Restart(szDeviceIdentify, {
          success: function (xmlDoc) {
              $("<div id='restartDiv' class='freeze'>重启中...</div>").appendTo("body");
              var oSize = VideoObj.getWindowSize();
              $("#restartDiv").css({
                  width: oSize.width + "px",
                  height: oSize.height + "px",
                  lineHeight: oSize.height + "px",
                  left: 0,
                  top: 0
              });
              setTimeout("reconnect('" + szDeviceIdentify + "')", 20000);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(szDeviceIdentify + " 重启失败！", status, xmlDoc);
          }
      });
  } else {
      VideoObj.showOPInfo(szDeviceIdentify + " 导入失败！",null,null);
  }
},

// 重连
reconnect:(szDeviceIdentify)=> {
  WebVideoCtrl.I_Reconnect(szDeviceIdentify, {
      success: function (xmlDoc) {
          $("#restartDiv").remove();
      },
      error: function (status, xmlDoc) {
          if (401 == status) {// 无插件方案，重启后session已失效，程序执行登出，从已登录设备中删除
              $("#restartDiv").remove();
              VideoObj.clickLogout();
          } else {
              setTimeout(function () {VideoObj.reconnect(szDeviceIdentify);}, 5000);
          }
      }
  });
},

// 开始升级
clickStartUpgrade:(szDeviceIdentify)=> {
  var szDeviceIdentify = $("#ip").val(),
      szFileName = $("#upgradeFile").val();

  if (null == szDeviceIdentify) {
      return;
  }

  if ("" == szFileName) {
      alert("请选择升级文件！");
      return;
  }

  var iRet = WebVideoCtrl.I_StartUpgrade(szDeviceIdentify, szFileName);
  if (0 == iRet) {
      VideoObj.g_tUpgrade = setInterval("getUpgradeStatus('" + szDeviceIdentify + "')", 1000);
  } else {
    VideoObj.showOPInfo(szDeviceIdentify + " 升级失败！",null,null);
  }
},

// 获取升级状态
getUpgradeStatus:(szDeviceIdentify)=> {
  var iStatus = WebVideoCtrl.I_UpgradeStatus();
  if (iStatus == 0) {
      var iProcess = WebVideoCtrl.I_UpgradeProgress();
      if (iProcess < 0) {
          clearInterval(VideoObj.g_tUpgrade);
          VideoObj.g_tUpgrade = 0;
          VideoObj.showOPInfo(szDeviceIdentify + " 获取进度失败！",null,null);
          return;
      } else if (iProcess < 100) {
          if (0 == $("#restartDiv").length) {
              $("<div id='restartDiv' class='freeze'></div>").appendTo("body");
              var oSize = VideoObj.getWindowSize();
              $("#restartDiv").css({
                  width: oSize.width + "px",
                  height: oSize.height + "px",
                  lineHeight: oSize.height + "px",
                  left: 0,
                  top: 0
              });
          }
          $("#restartDiv").text(iProcess + "%");
      } else {
          WebVideoCtrl.I_StopUpgrade();
          clearInterval(VideoObj.g_tUpgrade);
          VideoObj.g_tUpgrade = 0;

          $("#restartDiv").remove();

          WebVideoCtrl.I_Restart(szDeviceIdentify, {
              success: function (xmlDoc) {
                  $("<div id='restartDiv' class='freeze'>重启中...</div>").appendTo("body");
                  var oSize = VideoObj.getWindowSize();
                  $("#restartDiv").css({
                      width: oSize.width + "px",
                      height: oSize.height + "px",
                      lineHeight: oSize.height + "px",
                      left: 0,
                      top: 0
                  });
                  setTimeout("reconnect('" + szDeviceIdentify + "')", 20000);
              },
              error: function (status, xmlDoc) {
                VideoObj.showOPInfo(szDeviceIdentify + " 重启失败！", status, xmlDoc);
              }
          });
      }
  } else if (iStatus == 1) {
      WebVideoCtrl.I_StopUpgrade();
      VideoObj.showOPInfo(szDeviceIdentify + " 升级失败！",null,null);
      clearInterval(VideoObj.g_tUpgrade);
      VideoObj.g_tUpgrade = 0;
  } else if (iStatus == 2) {
      WebVideoCtrl.I_StopUpgrade();
      VideoObj.showOPInfo(szDeviceIdentify + " 语言不匹配！",null,null);
      clearInterval(VideoObj.g_tUpgrade);
      VideoObj.g_tUpgrade = 0;
  } else {
      WebVideoCtrl.I_StopUpgrade();
      VideoObj.showOPInfo(szDeviceIdentify + " 获取状态失败！",null,null);
      clearInterval(VideoObj.g_tUpgrade);
      VideoObj.g_tUpgrade = 0;
  }
},

// 检查插件版本
clickCheckPluginVersion:()=> {
  var iRet = WebVideoCtrl.I_CheckPluginVersion();
  if (0 == iRet) {
      alert("您的插件版本已经是最新的！");
  } else {
      alert("检测到新的插件版本！");
  }
},

// 远程配置库
clickRemoteConfig:()=> {
  var szDeviceIdentify = $("#ip").val(),
      iDevicePort = parseInt($("#deviceport").val(), 10) || "",
      szInfo = "";
  
  if (null == szDeviceIdentify) {
      return;
  }

  var iRet = WebVideoCtrl.I_RemoteConfig(szDeviceIdentify, {
      iDevicePort: iDevicePort,
      iLan: 1
  });

  if (-1 == iRet) {
      szInfo = "调用远程配置库失败！";
  } else {
      szInfo = "调用远程配置库成功！";
  }
  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
},

clickRestoreDefault:()=> {
  var szDeviceIdentify = $("#ip").val(),
      szMode = "basic";
  WebVideoCtrl.I_RestoreDefault(szDeviceIdentify, szMode, {
      timeout: 30000,
      success: function (xmlDoc) {
          $("#restartDiv").remove();
          VideoObj.showOPInfo(szDeviceIdentify + " 恢复默认参数成功！",null,null);
          //恢复完成后需要重启
          WebVideoCtrl.I_Restart(szDeviceIdentify, {
              success: function (xmlDoc) {
                  $("<div id='restartDiv' class='freeze'>重启中...</div>").appendTo("body");
                  var oSize = VideoObj.getWindowSize();
                  $("#restartDiv").css({
                      width: oSize.width + "px",
                      height: oSize.height + "px",
                      lineHeight: oSize.height + "px",
                      left: 0,
                      top: 0
                  });
                  setTimeout("reconnect('" + szDeviceIdentify + "')", 20000);
              },
              error: function (status, xmlDoc) {
                  VideoObj.showOPInfo(szDeviceIdentify + " 重启失败！", status, xmlDoc);
              }
          });
      },
      error: function (status, xmlDoc) {
          VideoObj.showOPInfo(szDeviceIdentify + " 恢复默认参数失败！", status, xmlDoc);
      }
  });
},

PTZZoomIn:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(10, false, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 调焦+成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  调焦+失败！", status, xmlDoc);
          }
      });
  }
},

PTZZoomout:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(11, false, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 调焦-成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  调焦-失败！", status, xmlDoc);
          }
      });
  }
},

PTZZoomStop:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(11, true, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 调焦停止成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  调焦停止失败！", status, xmlDoc);
          }
      });
  }
},

PTZFocusIn:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(12, false, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 聚焦+成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  聚焦+失败！", status, xmlDoc);
          }
      });
  }
},

PTZFoucusOut:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(13, false, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 聚焦-成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  聚焦-失败！", status, xmlDoc);
          }
      });
  }
},

PTZFoucusStop:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(12, true, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 聚焦停止成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  聚焦停止失败！", status, xmlDoc);
          }
      });
  }
},

PTZIrisIn:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(14, false, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 光圈+成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  光圈+失败！", status, xmlDoc);
          }
      });
  }
},

PTZIrisOut:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(15, false, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 光圈-成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  光圈-失败！", status, xmlDoc);
          }
      });
  }
},

PTZIrisStop:()=> {
  var oWndInfo = WebVideoCtrl.I_GetWindowStatus(VideoObj.g_iWndIndex);

  if (oWndInfo != null) {
      WebVideoCtrl.I_PTZControl(14, true, {
          iWndIndex: VideoObj.g_iWndIndex,
          success: function (xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + " 光圈停止成功！",null,null);
          },
          error: function (status, xmlDoc) {
              VideoObj.showOPInfo(oWndInfo.szDeviceIdentify + "  光圈停止失败！", status, xmlDoc);
          }
      });
  }
},

// 切换模式
changeIPMode:(iType)=> {
  var arrPort = [0, 7071, 80];

  $("#serverport").val(arrPort[iType]);
},

// 获取设备IP
clickGetDeviceIP:()=> {
  let iDeviceMode = parseInt($("#devicemode").val(), 10),
      szAddress = $("#serveraddress").val(),
      iPort = parseInt($("#serverport").val(), 10) || 0,
      szDeviceID = $("#deviceid").val(),
      szDeviceInfo = "";

  szDeviceInfo = WebVideoCtrl.I_GetIPInfoByMode(iDeviceMode, szAddress, iPort, szDeviceID);

  if ("" == szDeviceInfo) {
      VideoObj.showOPInfo("设备IP和端口解析失败！",null,null);
  } else {
      VideoObj.showOPInfo("设备IP和端口解析成功！",null,null);

      var arrTemp = szDeviceInfo.split("-");
      $("#loginip").val(arrTemp[0]);
      $("#deviceport").val(arrTemp[1]);
  }
},

// 启用多边形绘制
clickEnableDraw:()=> {
  var iRet = WebVideoCtrl.I_SetPlayModeType(6);// 多边形模式

  if (0 === iRet) {
      VideoObj.g_bEnableDraw = true;

      VideoObj.showOPInfo("启用绘制成功！",null,null);
  } else {
    VideoObj.showOPInfo("启用绘制失败！",null,null);
  }
},

// 禁用多边形绘制
clickDisableDraw:()=> {
  var iRet = WebVideoCtrl.I_SetPlayModeType(0);// 预览模式
  if (0 === iRet) {
    VideoObj.g_bEnableDraw = false;
      
    VideoObj.showOPInfo("禁用绘制成功！",null,null);
  } else {
     VideoObj.showOPInfo("禁用绘制失败！",null,null);
  }
},

// 添加图形
clickAddSnapPolygon:()=> {
  if (!VideoObj.g_bEnableDraw) {
      return;
  }

  var szId = $("#snapId").val();
  var szName = VideoObj.encodeString($("#snapName").val());

  var szInfo = "<?xml version='1.0' encoding='utf-8'?>";
  szInfo += "<SnapPolygonList>";
  szInfo += "<SnapPolygon>";
  szInfo += "<id>" + szId + "</id>";          // [1, 32]
  szInfo += "<polygonType>1</polygonType>";
  szInfo += "<PointNumMax>17</PointNumMax>";  // [MinClosed, 17]
  szInfo += "<MinClosed>4</MinClosed>";       // [4, 17]
  szInfo += "<tips>#" + szId + "#" + szName + "</tips>";
  szInfo += "<isClosed>false</isClosed>";
  szInfo += "<color><r>0</r><g>255</g><b>0</b></color>";
  szInfo += "<pointList/>";
  szInfo += "</SnapPolygon>";
  szInfo += "</SnapPolygonList>";

  var iRet = WebVideoCtrl.I_SetSnapPolygonInfo(VideoObj.g_iWndIndex, szInfo);
  if (0 === iRet) {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "添加图形成功！",null,null);
  } else if (-1 === iRet) {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "添加图形失败！",null,null);
  } else if (-2 === iRet) {
      alert("参数错误！");
  } else if (-3 === iRet) {
      alert("图形个数达到上限！");
  } else if (-4 === iRet) {
      alert("图形ID已存在！");
  }
  WebVideoCtrl.I_SetSnapDrawMode(VideoObj.g_iWndIndex, 2);
},

// 删除图形
clickDelSnapPolygon:()=> {
  if (!VideoObj.g_bEnableDraw) {
      return;
  }

  var szId = $("#snapId").val();

  var iIndex = VideoObj.getSnapPolygon(szId);
  if (iIndex != -1) {
      var oXML = VideoObj.getSnapPolygon(null);
      $(oXML).find("SnapPolygon").eq(iIndex).remove();

      var szInfo = VideoObj.toXMLStr(oXML);

      WebVideoCtrl.I_ClearSnapInfo(VideoObj.g_iWndIndex);
      WebVideoCtrl.I_SetSnapPolygonInfo(VideoObj.g_iWndIndex, szInfo);
      WebVideoCtrl.I_SetSnapDrawMode(VideoObj.g_iWndIndex, 3);
  } else {
      alert("图形ID不存在！");
  }
},

// 编辑图形
clickEditSnapPolygon:()=> {
  if (!VideoObj.g_bEnableDraw) {
      return;
  }

  var iRet = WebVideoCtrl.I_SetSnapDrawMode(VideoObj.g_iWndIndex, 3);
  if (0 === iRet) {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "编辑图形成功！",null,null);
  } else {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "编辑图形失败！",null,null);
  }
},

// 停止编辑
clickStopSnapPolygon:()=> {
  if (!VideoObj.g_bEnableDraw) {
      return;
  }

  var iRet = WebVideoCtrl.I_SetSnapDrawMode(VideoObj.g_iWndIndex, -1);
  if (0 === iRet) {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "停止编辑成功！",null,null);
  } else {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "停止编辑失败！",null,null);
  }
},

getSnapPolygon:(szId)=> {
  var szInfo = WebVideoCtrl.I_GetSnapPolygonInfo(VideoObj.g_iWndIndex);
  var oXML = VideoObj.loadXML(szInfo);

  if (typeof szId === "undefined") {
      return oXML;
  } else {
      var iIndex = -1;

      var aNodeList = $(oXML).find("SnapPolygon");
      if (aNodeList.length > 0) {
          $.each(aNodeList, function (i) {
              if ($(this).find("id").text() === szId) {
                  iIndex = i;
                  return false;
              }
          });
      }

      return iIndex;
  }
},

// 获取图形，保存到自己数据库中
clickGetSnapPolygon:()=> {
  if (!VideoObj.g_bEnableDraw) {
      return;
  }

  var szInfo = WebVideoCtrl.I_GetSnapPolygonInfo(VideoObj.g_iWndIndex);

  alert(szInfo);
},

// 设置图形，页面打开时可以设置以前设置过的图形
clickSetSnapPolygon:()=> {
  if (!VideoObj.g_bEnableDraw) {
      return;
  }

  WebVideoCtrl.I_ClearSnapInfo(VideoObj.g_iWndIndex);

  var szInfo = "<?xml version='1.0' encoding='utf-8'?>";
  szInfo += "<SnapPolygonList>";
  szInfo += "<SnapPolygon>";
  szInfo += "<id>1</id>";
  szInfo += "<polygonType>1</polygonType>";
  szInfo += "<tips>#1#设置1</tips>";
  szInfo += "<isClosed>true</isClosed>";
  szInfo += "<color><r>0</r><g>255</g><b>0</b></color>";
  szInfo += "<pointList>";
  szInfo += "<point><x>0.737903</x><y>0.229730</y></point>";
  szInfo += "<point><x>0.947581</x><y>0.804054</y></point>";
  szInfo += "<point><x>0.362903</x><y>0.777027</y></point>";
  szInfo += "</pointList>";
  szInfo += "</SnapPolygon>";
  szInfo += "<SnapPolygon>";
  szInfo += "<id>2</id>";
  szInfo += "<polygonType>1</polygonType>";
  szInfo += "<tips>#2#设置2</tips>";
  szInfo += "<isClosed>true</isClosed>";
  szInfo += "<color><r>0</r><g>255</g><b>0</b></color>";
  szInfo += "<pointList>";
  szInfo += "<point><x>0.451613</x><y>0.216216</y></point>";
  szInfo += "<point><x>0.447581</x><y>0.729730</y></point>";
  szInfo += "<point><x>0.116935</x><y>0.554054</y></point>";
  szInfo += "</pointList>";
  szInfo += "</SnapPolygon>";
  szInfo += "</SnapPolygonList>";

  var iRet = WebVideoCtrl.I_SetSnapPolygonInfo(VideoObj.g_iWndIndex, szInfo);
  if (0 === iRet) {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "设置图形成功！",null,null);
  } else if (-1 === iRet) {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "设置图形失败！",null,null);
  } else if (-2 === iRet) {
      alert("参数错误！");
  } else if (-3 === iRet) {
      alert("图形个数达到上限！");
  } else if (-4 === iRet) {
      alert("图形ID已存在！");
  }
},

// 清空图形
clickDelAllSnapPolygon:()=> {
  if (!VideoObj.g_bEnableDraw) {
      return;
  }

  var iRet = WebVideoCtrl.I_ClearSnapInfo(VideoObj.g_iWndIndex);
  if (0 === iRet) {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "清空图形成功！",null,null);
  } else {
      VideoObj.showOPInfo("窗口" + VideoObj.g_iWndIndex + "清空图形失败！",null,null);
  }
},

// 设备抓图
clickDeviceCapturePic:()=> {
  var szInfo = "";
  var szDeviceIdentify = $("#ip").val();
  var bZeroChannel = $("#channels option").eq($("#channels").get(0).selectedIndex).attr("bZero") == "true" ? true : false;
  var iChannelID = parseInt($("#channels").val(), 10);
  var iResolutionWidth = parseInt($("#resolutionWidth").val(), 10);
  var iResolutionHeight = parseInt($("#resolutionHeight").val(), 10);

  if (null == szDeviceIdentify) {
      return;
  }
  
  if (bZeroChannel) {// 零通道不支持设备抓图
      return;
  }

  var szPicName = szDeviceIdentify + "_" + iChannelID + "_" + new Date().getTime();
  var iRet = WebVideoCtrl.I_DeviceCapturePic(szDeviceIdentify, iChannelID, szPicName, {
      bDateDir: true,  //是否生成日期文件
      iResolutionWidth: iResolutionWidth,
      iResolutionHeight: iResolutionHeight
  });

  if (0 == iRet) {
      szInfo = "设备抓图成功！";
  } else {
      szInfo = "设备抓图失败！";
  }
  VideoObj.showOPInfo(szDeviceIdentify + " " + szInfo,null,null);
},

loadXML:(szXml)=> {
  if(null == szXml || "" == szXml) {
      return null;
  }

  var oXmlDoc = null;

  // if (window.DOMParser) {
  //     var oParser = new DOMParser();
  //     oXmlDoc = oParser.parseFromString(szXml, "text/xml");
  // } else {
  //     oXmlDoc = new ActiveXObject("Microsoft.XMLDOM");
  //     oXmlDoc.async = false;
  //     oXmlDoc.loadXML(szXml);
  // }

  return oXmlDoc;
},

toXMLStr:(oXmlDoc)=> {
  var szXmlDoc = "";

  try {
      var oSerializer = new XMLSerializer();
      szXmlDoc = oSerializer.serializeToString(oXmlDoc);
  } catch (e) {
      try {
          szXmlDoc = oXmlDoc.xml;
      } catch (e) {
          return "";
      }
  }
  if (szXmlDoc.indexOf("<?xml") == -1) {
      szXmlDoc = "<?xml version='1.0' encoding='utf-8'?>" + szXmlDoc;
  }

  return szXmlDoc;
},

encodeString:(str)=> {
  if (str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  } else {
      return "";
  }
}
  }