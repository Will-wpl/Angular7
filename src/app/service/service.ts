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
        areaId:3,
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
}
