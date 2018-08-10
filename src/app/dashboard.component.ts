import { Component,Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MenusService } from './service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  animations: [
    trigger('inOut', [
        state('out', style({ marginLeft: "284px",width:(document.body.clientWidth-284)+'px'})),
        transition('void => *', [
            animate(200, style({marginLeft: "284px" }))
        ]),
        transition('* => void', [
            animate(200, style({marginLeft: "0px" }))
        ])
    ])
]
})
export class DashboardComponent implements OnInit {
  navData = [];
  out='in';load=false;show_left_menu=true;
  @Input() page;
  @Input() left_menus;
  constructor(private router: Router,private menuService: MenusService) { }
  ngOnChanges():void{
    this.show_left_menu=this.router.url.indexOf('MAIN')>0?false:true;
    this.out=this.router.url.indexOf('MAIN')>0?'in':(this.out=='out'?'out':'in');
    this.navData=this.left_menus?this.left_menus:[];
    if(this.navData.length>0){
      let url = (this.router.url.substr(this.router.url.lastIndexOf("/"),this.router.url.length)).split("/")[1];
      //console.log(this.navData);
      this.navData.map((item,index)=>{
        if(item.children){
           let childObj = item.children.find(it=>{
             return it.permissionUrl.indexOf(url)>0
           })
           if(childObj){
              sessionStorage.menuId = childObj.id;
              sessionStorage.zoneId = childObj.zoneId;
           }
        }else{
          let childObj = item.permissionUrl.indexOf(url)>0?item.id:'';
          let childObjzone = item.permissionUrl.indexOf(url)>0?item.zoneId:'';
          if(childObj){sessionStorage.menuId = childObj;sessionStorage.zoneId = childObjzone;}
        }
      })
      console.log('菜单id',sessionStorage.menuId);
      if(sessionStorage.menuId && sessionStorage.zoneId){//路由懒加载
        this.load=true;
      }
    }
    
  }
  onListen(data:any):void{
    this.out=data;
  }
  ngOnInit(): void {
    setTimeout(()=>{
      if(this.router.url.indexOf('MAIN')>0){
        this.load=true;
      }
    })
    
  }
}
