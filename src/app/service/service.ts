import { MENUS } from './mock-heroes';
import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './mainService'

@Injectable()
export class MenusService {
  getMenu(): Promise<any> {
    return Promise.resolve(MENUS);
  }
}

@Injectable()
export class AllService {
  constructor(private httpInterceptorService: HttpInterceptorService) { }
  login(url: string, username: string, password: string) {
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, // 登录URL
      data: {
        userId: username,
        pwd: password
      },
    });
  }
  getMenus(url: string, token: string, userId: string) {
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        userId: userId,
      },
      header:token
    });
  }
  getArea(url: string, token: string, senTypeId: any,menuId:any) {
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        senTypeId: senTypeId,
        pid:1,
        nid:2,
        areaId:1,
        menuId:menuId
      },
      header:token
    });
  }
  getSensorList(url: string, token: string, zoneId: any,menuId:any,senTypeId:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        zoneId:zoneId,
        menuId:menuId,
        senTypeId:senTypeId
      },
      header:token
    });
  }
  findImg(url: string, token: string,senTypeId: any, zoneId: any,menuId){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        zoneId: zoneId,
        senTypeId:senTypeId,
        menuId:menuId
      },
      header:token
    });
  }
  getSenChSummary(url: string, token: string,ch: any,startTime:any,endTime:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        ch:ch,
        startTime:startTime,
        endTime:endTime
      },
      header:token
    });
  }
  getSenChSummaryTotal(url: string, token: string,idArray:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        chId:idArray
      },
      header:token
    });
  }
  getSensorType(url: string, token: string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {},
      header:token
    });
  }
  getCameraZone(url: string, token: string,zoneId:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        zoneId:zoneId
      },
      header:token
    });
  }
  getRealData(url: string, token: string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {},
      header:token
    });
  }
  getCurrentAlarmData(url: string, token: string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {},
      header:token
    });
  }
  saveAlarmDealInfo(url: string, token: string,info:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        logId:info.logId,
        dealInfo:info.dealInfo,
        comments:info.comments,
        state:info.state=="已处理"?true:false
      },
      header:token
    });
  }
  selUser(url: string, token: string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {},
      header:token
    });
  }
  add(url: string, token: string,user:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: user,
      header:token
    });
  }
  getRuleBySenType(url: string, token: string,typeId:any,page:any,rows:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        typeId:typeId,
        page:page,
        rows:rows
      },
      header:token
    });
  }
  saveRuleByCh(url: string, token: string,userId:any,chId:any,rules:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        userId:userId,
        chId:chId,
        rules:rules
      },
      header:token
    });
  }
  getRuleLevel(url: string, token: string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {},
      header:token
    });
  }
  getAlarmLogs(url: string, token: string,lvlId:any,dealState:string,startDate:any,endDate:any,page:any,rows:any){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        lvlId:lvlId,
        dealState:dealState,
        startDate:startDate,
        endDate:endDate,
        page:page,
        rows:rows
      },
      header:token
    });
  }
  getAlermLvl(url: string, token: string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {},
      header:token
    });
  }
  senDataDownLoad(url: string, token: string,senChIds:string,startTime:string,endTime:string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        senChIds:senChIds,
        startTime:startTime,
        endTime:endTime
      },
      header:token
    });
  }
  getSensorChsByTypes(url: string, token: string,typeId:string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {
        typeId:typeId
      },
      header:token
    });
  }
  selRole(url: string, token: string){
    return this.httpInterceptorService.request({
      method: 'GET',
      url: url, //获取菜单URL
      data: {},
      header:token
    });
  }
}
