import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'serial-number',
  templateUrl: './serialnumber.component.html',
})
export class SerialnumberComponent implements OnInit {
  master=false;
  @Input() serial;
  checkserial=[];
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(
    private router: Router) { }
  selectAll(event):void{
    if(event.target.checked){
      this.master=true;
      this.serial.map((item,index)=>{
        item.checked=true;
      })
      this.onVoted.emit(this.serial);
    }else{
      this.master=false
      this.onVoted.emit([]);
    }
    //console.log(this.master);
  }
  selectChange(event,index):void{ 
    if(event.target.checked){
      this.checkserial[index].checked=true;
    }else{
      this.checkserial[index].checked=false;
    }
    let arr = this.checkserial.filter(item=>{
      return item.checked != false
    })
    //console.log(arr);
    this.onVoted.emit(arr);
  }
  ngOnChanges():void{
    if(this.serial.length>0){
      this.checkserial=[];
      this.serial.map((item)=>{
        this.checkserial.push(item);
      });
    }
  }
  ngOnInit(): void {
  
  }


}
