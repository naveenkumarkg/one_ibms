import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { ControlListComponent } from './components/control-list/control-list.component';
import { HomeComponent } from './components/home/home.component';
import {SideNavigationService} from "./services/side-navigation.service";
import {HttpClientModule} from '@angular/common/http';
import { ReportingComponent } from './components/reporting/reporting.component';
import { SearchComponent } from './components/watch-list/search/search.component';
import { ProductDetailsService } from './services/product-details.service';


@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    WatchListComponent,
    ControlListComponent,
    HomeComponent,
    ReportingComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SideNavigationService, ProductDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
