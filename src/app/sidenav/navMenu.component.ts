import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SerialchartsComponent } from '../structure_monitoring/structure_box/serial_charts/serialcharts.component';
@Component({
    selector: 'nav-menu',
    templateUrl: './navMenu.component.html',
    animations: [
        trigger('inOut', [
            state('out', style({ left: '-284px',overflow:'initial' })),
            transition('void => *', [
                animate(200, style({left: 0,overflow:'auto' }))
            ]),
            transition('* => void', [
                animate(200, style({left: '-284px',overflow:'initial' }))
            ])
        ])
    ],
    providers:[SerialchartsComponent]
})
export class NavMenuComponent implements OnInit {
    out='in';timer;
    @Input() menus;
    @Output() onVoted: EventEmitter<any> = new EventEmitter();
    constructor(private refreshChart:SerialchartsComponent) { }
    ngOnChanges(): void {}
    ngOnInit() { }
    toggleSubMenu():void{
        this.out==='in'?this.out='out':this.out='in';
        this.onVoted.emit(this.out);
        if(this.timer){clearTimeout(this.timer);}
        this.timer = setTimeout(()=>{
            this.refreshChart.refreshChart();
        },1000)
    }
}