import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { MainComponent }   from './main/main.component';
import { StructurehomeComponent } from './structure_monitoring/structurehome.component';
import {SystemmainComponent} from './system_overview/system-main.component';
import {SupportmainComponent} from './support/support-main.component';
import { VideomonitoringComponent }   from './video/videomonitoring.component';
import { SystemcyyjComponent }   from './system_setting/system-cyyj.component';
import { SystemjqtsComponent }   from './system_setting/system-jqts.component';
import { SystemyxszComponent }   from './system_setting/system-yxsz.component';
import { SystemyhglComponent }   from './system_setting/system-yhgl.component';
import { DatabjclComponent }   from './data_management/data-bjcl.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'MAIN',  component: MainComponent },
  { path: 'structure/GJXY',  component: StructurehomeComponent },
  { path: 'structure/YB',  component: StructurehomeComponent },
  { path: 'structure/JSD',  component: StructurehomeComponent },
  { path: 'structure/SL',  component: StructurehomeComponent },
  { path: 'structure/JHBX',  component: StructurehomeComponent },
  { path: 'structure/GGQX',  component: StructurehomeComponent },
  { path: 'environment/WD',  component: StructurehomeComponent },
  { path: 'dataanalysis/SEARCH',  component: StructurehomeComponent },
  { path: 'systemoverview/GCJJ',  component: SystemmainComponent },
  { path: 'systemoverview/MKGN',  component: SystemmainComponent },
  { path: 'systemoverview/CDXX',  component: SystemmainComponent },
  { path: 'systemoverview/XTLJ',  component: SystemmainComponent },
  { path: 'systemoverview/SBQD',  component: SystemmainComponent },
  { path: 'video/EAST',  component: VideomonitoringComponent },
  { path: 'video/WEST',  component: VideomonitoringComponent },
  { path: 'video/SOUTH',  component: VideomonitoringComponent },
  { path: 'video/NORTH',  component: VideomonitoringComponent },
  { path: 'systemsetting/CYYJ',  component: SystemcyyjComponent },
  { path: 'systemsetting/CYYJS',  component: SystemcyyjComponent },
  { path: 'systemsetting/JQTS',  component: SystemjqtsComponent },
  { path: 'systemsetting/JQTSS',  component: SystemjqtsComponent },
  { path: 'systemsetting/YXSZ',  component: SystemyxszComponent },
  { path: 'systemsetting/YXSZS',  component: SystemyxszComponent },
  { path: 'systemsetting/YHGL',  component: SystemyhglComponent },
  { path: 'systemsetting/YHGLS',  component: SystemyhglComponent },
  { path: 'management/BJCL',  component: DatabjclComponent },
  { path: 'management/SEARCH',  component: StructurehomeComponent },
  { path: 'support/KFZX',  component: SupportmainComponent },
  { path: 'support/TXDZ',  component: SupportmainComponent },
  { path: 'support/RJBB',  component: SupportmainComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
