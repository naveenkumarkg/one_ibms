import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListComponent } from "./components/watch-list/watch-list.component";
import { ControlListComponent } from "./components/control-list/control-list.component";
import { HomeComponent } from "./components/home/home.component";
import { ReportingComponent } from "./components/reporting/reporting.component";
import { SearchComponent } from './components/watch-list/search/search.component';
import { QueueComponent } from './components/watch-list/queue/queue.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'watch-list/search', component: SearchComponent },
      { path: 'watch-list/queue', component: QueueComponent },
      { path: 'control-list', component: ControlListComponent },
      { path: 'reporting', component: ReportingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
