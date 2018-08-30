import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'structure-box',
  templateUrl: './structurebox.component.html',
})
export class StructureboxComponent implements OnInit {
  @Input() config;
  @Input() chartData;
  @Input() selectIndex;
  @Input() searchIndex;
  @Input() imgUrl;
  @Input() mainImgUrl;
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  token = sessionStorage.token?sessionStorage.token:'';
  senType =0;
  value='';searchvalue='';
  constructor(
    private router: Router,
  ) { }

  selectChange(val):void{
    this.value=val;
    this.onVoted.emit(val);
  }
  searchChange(val):void{
    this.searchvalue=val;
    this.onVoted.emit(val);
  }
  ngOnChanges():void{
    if(this.searchIndex){
      this.searchvalue=this.searchIndex;
      this.onVoted.emit(this.searchIndex);
    }
    if(this.selectIndex){
      this.value=this.selectIndex;
      this.onVoted.emit(this.selectIndex);
    }
  }
  ngOnInit(): void {
    //this.chartData=this.config.serial;
    this.onVoted.emit(this.value);
  }
  onListen(data: any):void{
    if(data){
      //console.log(data);
      if(data.length>0){this.chartData = data;} 
    }
    //console.log(data);
  }
  onChartListen(data: any):void{
    if(data){
      //console.log(data);
      if(data.arr.length>0){
        this.chartData = data.arr.filter(item=>{
          return item.checked != false
        });
        this.config.serial[data.index].checked=false;
        this.config.serial[data.index].disabled=true;
      } 
    }
    //console.log(data);
  }
}
