import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../service/service';
@Component({
  selector: 'video-monitoring',
  templateUrl: './videomonitoring.component.html',
})
export class VideomonitoringComponent implements OnInit {
  token = sessionStorage.token ? sessionStorage.token : '';
  master=false;zoneId=''
  videoList=[];
  constructor(
    private router: Router,
    private getData: AllService) { }
  selectAll(event):void{
    if(event.target.checked){
      this.master=true;
      this.videoList.map((item)=>{
        item.checked=true;
      })
    }else{
      this.master=false
    }
    //console.log(this.master);
  }
  selectChange(event,index):void{ 
    if(event.target.checked){
      this.videoList[index].checked=true;
    }else{
      this.videoList[index].checked=false;
    }
  }
  ngOnChanges():void{
    
  }
  ngOnInit(): void {
      this.zoneId = sessionStorage.zoneId;
      this.getCheckList(4);
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
      }
    })
  }

}
