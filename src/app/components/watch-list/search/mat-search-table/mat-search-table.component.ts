
import { Component, Input, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatTableDataSource } from '@angular/material/table';
import { ISearchResults } from 'src/app/interface/searchResults.interface';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-mat-search-table',
  templateUrl: './mat-search-table.component.html',
  styleUrls: ['./mat-search-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MatSearchTableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'company_name', 'cusip6', 'cusip_isn', 'deal_id', 'effective_date', 'end_date', 'off_list_date', 'on_list_date', 'project_name', 'ticker_symbol'];
  @Input() materialTableData: ISearchResults[] = [];
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  id = new FormControl('');
  company_name = new FormControl('');
  cusip6 = new FormControl('');
  cusip_isn = new FormControl('');
  deal_id = new FormControl('');
  effective_date = new FormControl('');
  end_date = new FormControl('');
  off_list_date = new FormControl('');
  on_list_date = new FormControl('');
  project_name = new FormControl('');
  ticker_symbol = new FormControl('');

  filterValues = {
    id: '',
    company_name: '',
    cusip6: '',
    cusip_isn: '',
    deal_id: '',
    effective_date: '',
    end_date: '',
    off_list_date: '',
    on_list_date: '',
    project_name: '',
    ticker_symbol: '',
  };

  events: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.data = this.materialTableData;
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

    this.cusip6.valueChanges
      .subscribe(
        cusip6 => {
          this.filterValues.cusip6 = cusip6;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.cusip_isn.valueChanges
      .subscribe(
        cusip_isn => {
          this.filterValues.cusip_isn = cusip_isn;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.deal_id.valueChanges
      .subscribe(
        deal_id => {
          this.filterValues.deal_id = deal_id;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.effective_date.valueChanges
      .subscribe(
        effective_date => {
          this.filterValues.effective_date = this.convertDate(effective_date);
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.end_date.valueChanges
      .subscribe(
        end_date => {
          this.filterValues.end_date =  this.convertDate(end_date);
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.off_list_date.valueChanges
      .subscribe(
        off_list_date => {
          this.filterValues.off_list_date = this.convertDate(off_list_date);
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.on_list_date.valueChanges
      .subscribe(
        on_list_date => {
          this.filterValues.on_list_date =  this.convertDate(on_list_date);
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
    this.ticker_symbol.valueChanges
      .subscribe(
        ticker_symbol => {
          this.filterValues.ticker_symbol = ticker_symbol.toLowerCase();
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

  // Filter functionality by Column
  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data: any, filter: any): boolean {
      let searchTerms = JSON.parse(filter);

      return data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
        && data.company_name.toLowerCase().indexOf(searchTerms.company_name) !== -1
        && data.cusip6.toLowerCase().indexOf(searchTerms.cusip6) !== -1
        && data.cusip_isn.toLowerCase().indexOf(searchTerms.cusip_isn) !== -1
        && data.deal_id.toString().toLowerCase().indexOf(searchTerms.deal_id) !== -1
        && data.effective_date.toLowerCase().indexOf(searchTerms.effective_date) !== -1
        && data.end_date.toLowerCase().indexOf(searchTerms.end_date) !== -1
        && data.off_list_date.toLowerCase().indexOf(searchTerms.off_list_date) !== -1
        && data.on_list_date.toLowerCase().indexOf(searchTerms.on_list_date) !== -1
        && data.project_name.toLowerCase().indexOf(searchTerms.project_name) !== -1
        && data.ticker_symbol.toLowerCase().indexOf(searchTerms.ticker_symbol) !== -1;
    }
    return filterFunction;
  }

  

}
