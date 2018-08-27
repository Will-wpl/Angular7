import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { VideoObj } from '../util';
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  //providers: [AllService]
})
export class ModalComponent implements OnInit {
  video=VideoObj;
  @Input() text;
  constructor(private router: Router,private app:AppComponent) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {

  }
  dofunction(){
    this.video.clickLogout();
    this.app.goOut();
  }
}
