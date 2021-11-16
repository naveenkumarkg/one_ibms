import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// External Modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { IgxGridModule } from 'igniteui-angular';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

//Custom Components
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { ControlListComponent } from './components/control-list/control-list.component';
import { HomeComponent } from './components/home/home.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { SearchComponent } from './components/watch-list/search/search.component';
import { MaterialTableComponent } from './components/watch-list/search/material-table/material-table.component';
import { QueueComponent } from './components/watch-list/queue/queue.component';

// Services
import { SideNavigationService } from "./services/side_navigation_service/side-navigation.service";
import { ProductDetailsService } from './services/Product_Service/product-details.service';


@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    WatchListComponent,
    ControlListComponent,
    HomeComponent,
    ReportingComponent,
    SearchComponent,
    MaterialTableComponent,
    QueueComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    IgxGridModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSortModule,
    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SideNavigationService, ProductDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
