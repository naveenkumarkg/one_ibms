
import { Component, Input, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatTableDataSource } from '@angular/material/table';
import { ISearchResults } from 'src/app/interface/searchResults.interface';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-mat-queue-table',
  templateUrl: './mat-queue-table.component.html',
  styleUrls: ['./mat-queue-table.component.scss'],

})
export class MatQueueTableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['select','id', 'in_review_by', 'project_name', 'company_name', 'product_type', 'control_room', 'alert_date', 'alert_type'];
 // displayedColumns: string[] = ['id', 'company_name', 'cusip6', 'cusip_isn', 'deal_id', 'effective_date', 'end_date', 'off_list_date', 'on_list_date', 'project_name', 'ticker_symbol'];
  @Input() matQueueTableData:any= [];
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  id = new FormControl('');
  in_review_by = new FormControl('');
  project_name = new FormControl('');
  company_name = new FormControl('');
  product_type = new FormControl('');
  control_room = new FormControl('');
  alert_date = new FormControl('');
  alert_type = new FormControl('');
 

  filterValues = {
    id: '',
    in_review_by: '',
    project_name: '',
    company_name: '',
    product_type: '',
    control_room: '',
    alert_date: '',
    alert_type: '',
  };
  
  selection = new SelectionModel<any>(true, []);

  events: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
console.log(this.matQueueTableData);

    this.dataSource.data = this.matQueueTableData;
    this.dataSource.filterPredicate = this.createFilter();
  



    // values changes for each input from the table column
    this.id.valueChanges
      .subscribe(
        id => {
          this.filterValues.id = id;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.company_name.valueChanges
      .subscribe(
        company_name => {
          this.filterValues.company_name = company_name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.in_review_by.valueChanges
      .subscribe(
        in_review_by => {
          this.filterValues.in_review_by = in_review_by;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.product_type.valueChanges
      .subscribe(
        product_type => {
          this.filterValues.product_type = product_type;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.control_room.valueChanges
      .subscribe(
        control_room => {
          this.filterValues.control_room = control_room;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.alert_date.valueChanges
      .subscribe(
        alert_date => {
          this.filterValues.alert_date = this.convertDate(alert_date);
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.project_name.valueChanges
      .subscribe(
        project_name => {
          this.filterValues.project_name = project_name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
   
  }

  convertDate(date: string) {
    const newDate = new Date(Date.parse(date));
    const localDate = newDate.toLocaleDateString();
    return localDate;

  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.name));
  }



  // Filter functionality by Column
  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data: any, filter: any): boolean {
      let searchTerms = JSON.parse(filter);

      return data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
        && data.company_name.toLowerCase().indexOf(searchTerms.company_name) !== -1
        && data.in_review_by.toLowerCase().indexOf(searchTerms.in_review_by) !== -1
        && data.product_type.toLowerCase().indexOf(searchTerms.product_type) !== -1
        && data.alert_date.toLowerCase().indexOf(searchTerms.alert_date) !== -1
        && data.project_name.toLowerCase().indexOf(searchTerms.project_name) !== -1
        && data.queue_type.toLowerCase().indexOf(searchTerms.queue_type) !== -1
        && data.control_room.toLowerCase().indexOf(searchTerms.control_room) !== -1
    }
    return filterFunction;
  }

  

}
