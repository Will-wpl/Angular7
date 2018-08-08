import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../service/service';
import { MainUrl } from '../util';
@Component({
  selector: 'structure-home',
  templateUrl: './structurehome.component.html'
})
export class StructurehomeComponent implements OnInit {
  token = sessionStorage.token ? sessionStorage.token : '';
  selectIndex = ''; searchIndex = ''; result = []; chartData = [];
  menuId = ''; imgUrl = ''; mainImgUrl = ''; SensorTypeList = [];
  senType = '0'; module_size = 3;
  lmt = {
    option: [],
    title: '航站楼整体立面图',
    type: 'lmt'
  }
  cdxt = {
    option: [],
    title: '测点详图',
    type: 'cdxt'
  }
  ssqx = {
    serial: [],
    title: '应变数据实时曲线',
    type: 'ssqx'
  }
  wd = {
    title: '温度梯度图',
    type: 'wd',
    img: 'images/wd.png'
  }
  constructor(
    private router: Router,
    private getData: AllService) { }

  onListen(id: any): void {
    this.ssqx.serial = [];
    this.chartData = [];
    if (id != '' && id != undefined) {
      this.selectIndex = id;
      //console.log('下拉列表返回的id',id);
      this.getImage(id, "zone");
      this.getCheckList(id, this.router.url.indexOf("SEARCH") > 0 ? 1 : 5);//限制只勾选5条,数据查询1条
    }
  }
  searchListen(id: any): void {
    if (id != '' && id != undefined) {
      let wd = this.SensorTypeList.find(item => {
        return item.id == id;
      })
      wd.name === "温度" ? this.module_size = 4 : this.module_size = 3;
      this.selectIndex = '';
      this.searchIndex = id;
      this.senType = id;
      this.refresh();
      this.getImage(id, 'main');
    }
  }
  ngOnInit(): void {
    let url = (this.router.url.substr(this.router.url.lastIndexOf("/"), this.router.url.length)).split("/")[1];
    switch (url) {
      case 'WD': this.module_size = 4
        break;
    }
    if (this.router.url.indexOf("SEARCH") > 0) {
      this.menuId = '';
      this.getSensorType();
    } else {
      this.menuId = sessionStorage.menuId;
      this.refresh();
      this.getImage(2, 'main');
    }
  }
  getCheckList(id, limited) {
    this.getData.getSensorList('rtDataC/getSenChTree', this.token, id, this.menuId, this.senType).then(result => {
      console.log("传感器树列表", result);
      const sensorList = [];
      if (result.beanModel) {
        result.beanModel.map((item, index) => {
          let sensorObj = {};
          if (index < limited) {
            sensorObj = { text: item.chName, data: [], chId: item.chId, checked: true };
          } else {
            sensorObj = { text: item.chName, data: [], chId: item.chId, checked: false };
          }
          sensorList.push(sensorObj);
        })
        this.ssqx.serial = [].concat(sensorList);
        if (this.chartData.length <= 0) {
          this.chartData = [].concat(sensorList);
        }
        // sensorList.map((item)=>{
        //   this.getChartsData(item.chId,CurentTime(0,'mm'),CurentTime(1,'mm'));
        // })
      }
    })
  }
  ngOnDestroy() {
    if (this.chartData) {
      this.chartData = [];
    }
  }
  getImage(id, type) {
    this.getData.findImg('imgC/findOne', this.token, this.senType, id, this.menuId).then(result => {
      console.log("下拉菜单对应图片", result);
      if (result.beanModel) {
        if (type == 'zone') {
          this.imgUrl = `${MainUrl}/${result.beanModel.url}`;
        } else {
          this.mainImgUrl = `${MainUrl}/${result.beanModel.url}`;
        }
      } else {
        if (type == 'zone') {
          this.imgUrl = 'images/change_img1.png';
        } else {
          this.mainImgUrl = 'images/img1.png';
        }
      }
    })
  }
  getSensorType() {
    this.getData.getSensorType('sensorC/getSensorType', this.token).then(result => {
      //console.log("SEARCH下拉菜单列表",result);
      if (result.beanModel) {
        this.SensorTypeList = result.beanModel;
        result.beanModel.map((item, index) => {
          let changeObj = { text: item.name, value: `${item.id}` }
          this.lmt.option.push(changeObj);
        })
        this.searchIndex = result.beanModel[0].id;
        this.senType = this.searchIndex;
      }
    })
  }
  refresh() {
    //console.log(this.senType);
    this.getData.getArea('zoneC/getTreeBySenType', this.token, this.senType, this.menuId).then(result => {
      //console.log("下拉菜单列表",result);
      this.result = [].concat(result);
      this.cdxt.option = [];
      result.map((item, index) => {
        let changeObj = { text: item.text, value: `${item.id}` }
        this.cdxt.option.push(changeObj);
      })
      this.selectIndex = this.result[0] ? this.result[0].id : 1;
    })
  }
}
