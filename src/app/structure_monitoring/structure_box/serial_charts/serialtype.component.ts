import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../../../service/service';
import * as moment from 'moment';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import * as $ from 'jquery';

@Component({
  selector: 'serial-type',
  templateUrl: './serialtype.component.html',
})
export class SerialtypeComponent implements OnInit {
  @Input() total;
  @Input() serialType;
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  default=false; newPage=["FZJC","WD","SDJC","DZJC","YYL","TDWY","SSFWY","ZZWY","ZLWY","QDWY","GJFS","HNTLF"]
  constructor(
    private router: Router,
    private getData: AllService) {
    //console.log('echarts,', echarts)
  }
  ngOnInit(): void {
    let defaultTuly = this.newPage.some(item=>{
      return item === this.serialType;
    })
    if(!defaultTuly){
      this.default=true;
    }
  }
  showEdit(){
    $("#chartEdit").fadeIn(500);
  }
}
