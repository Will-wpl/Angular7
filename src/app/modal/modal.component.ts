import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MainComponent } from '../main/main.component';
import { DatabjclComponent }   from '../data_management/data-bjcl.component';
import { VideoObj } from '../util';
import * as $ from 'jquery';
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  providers: [MainComponent,DatabjclComponent]
})
export class ModalComponent implements OnInit {
  video=VideoObj;
  @Input() text;
  constructor(private router: Router,
    private app:AppComponent,
    private main:MainComponent,
    private databjcl:DatabjclComponent) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    
  }
  dofunction(){
    this.video.clickLogout();
    this.app.goOut();
  }
  submitAlarm(){
    $(".form-group .error").hide();
    if($("#dealInfo").val()==""){
      $("#dealInfo").next().show();
      return;
    }
    if($("#operater").val()==""){
      $("#operater").next().show();
      return;
    }
    if($("input[name='state']:checked").val()==null){
      $("#state").next().show();
      return;
    }
    let info = {
      dealInfo:$("#dealInfo").val(),
      comments:$("#comments").val(),
      operater:$("#operater").val(),
      state:$("input[name='state']:checked").val()
    }
    if(sessionStorage.submitType=="databjcl"){
      this.databjcl.setAlarmInfo(info);
    }else{
      this.main.setAlarmInfo(info);
    }
  }
}
