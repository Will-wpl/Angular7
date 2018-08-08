export class Hero {
  id: number;
  name: string;
}
export const MainUrl = 'http://i.lailibai.com:3001'
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
      title:'设备清单<br/>'+
            '设备清单列表如下',
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