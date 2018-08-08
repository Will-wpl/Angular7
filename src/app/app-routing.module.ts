import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { MainComponent }   from './main/main.component';
import { StructurehomeComponent } from './structure_monitoring/structurehome.component';
import {SystemmainComponent} from './system_overview/system-main.component'
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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
