import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { NavMenuComponent } from './sidenav/navMenu.component';
import { StructurehomeComponent } from './structure_monitoring/structurehome.component';
import { SideItemComponent } from './sidenav/navItem.component';
import { LoginComponent } from './users/Login.component';
import { StructureboxComponent } from './structure_monitoring/structure_box/structurebox.component';
import { SerialnumberComponent } from './structure_monitoring/structure_box/serial_number/serialnumber.component';
import { SerialchartsComponent } from './structure_monitoring/structure_box/serial_charts/serialcharts.component';
import {SystemmainComponent} from './system_overview/system-main.component'
import {SystemshowComponent} from './system_overview/system_show/system-show.component'
import {SystemchangeComponent} from './system_overview/system_show/system-change.component'
import { AppRoutingModule }     from './app-routing.module';
import { MenusService } from './service/service';
import { HttpInterceptorService } from './service/mainService'
import { HttpModule }    from '@angular/http';
import { ModalComponent } from './modal/modal.component';
import { MainComponent }   from './main/main.component';
import { VideomonitoringComponent }   from './video/videomonitoring.component';
import { SystemcyyjComponent }   from './system_setting/system-cyyj.component';
import { SystemjqtsComponent }   from './system_setting/system-jqts.component';
import { SystemyxszComponent }   from './system_setting/system-yxsz.component';
import { SystemyhglComponent }   from './system_setting/system-yhgl.component';
import { AllService } from './service/service';
import { OwlDateTimeModule, OwlNativeDateTimeModule,OWL_DATE_TIME_FORMATS,OwlDateTimeIntl,OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
// import { NgxEchartsModule } from 'ngx-echarts';
export const MY_MOMENT_FORMATS = {
  parseInput: 'YYYY-MM-DD',
  fullPickerInput: 'YYYY-MM-DD',
  datePickerInput: 'YYYY-MM-DD',
  timePickerInput: 'YYYY-MM-DD',
  monthYearLabel: 'YYYY年-MM月-DD日',
  dateA11yLabel: 'YYYY年-MM月-DD日',
  monthYearA11yLabel: 'YYYY年-MM月-DD日',
};
export class DefaultIntl extends OwlDateTimeIntl  {
    cancelBtnLabel= '关闭';
    setBtnLabel= '确认';
    rangeFromLabel='开始时间';
    rangeToLabel= '结束时间';
}
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule 
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NavMenuComponent,
    SideItemComponent,
    StructurehomeComponent,
    StructureboxComponent,
    SerialnumberComponent,
    SerialchartsComponent,
    LoginComponent,
    ModalComponent,
    MainComponent,
    SystemmainComponent,
    SystemshowComponent,
    SystemchangeComponent,
    VideomonitoringComponent,
    SystemcyyjComponent,
    SystemjqtsComponent,
    SystemyxszComponent,
    SystemyhglComponent
  ],
  providers: [ MenusService,HttpInterceptorService,AllService,
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'zh_CN'},
    {provide: OwlDateTimeIntl, useClass: DefaultIntl},
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
