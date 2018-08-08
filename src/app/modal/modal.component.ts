import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  //providers: [AllService]
})
export class ModalComponent implements OnInit {
  @Input() text;
  constructor(private router: Router,private app:AppComponent) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {

  }
  dofunction(){
    this.app.goOut();
  }
}
