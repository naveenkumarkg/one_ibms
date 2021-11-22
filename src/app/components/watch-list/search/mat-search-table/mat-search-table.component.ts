
import { Component, Input, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatTableDataSource } from '@angular/material/table';
import { ISearchResults } from 'src/app/interface/searchResults.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-mat-search-table',
  templateUrl: './mat-search-table.component.html',
  styleUrls: ['./mat-search-table.component.scss'],

})
export class MatSearchTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'company_name', 'deal_type', 'list_type', 'deal_id', 'effective_date', 'end_date', 'project_name', 'ticker_symbol'];
  @Input() materialTableData: ISearchResults[] = [];
  @Input() showSearchBar: any;
  dataSource = new MatTableDataSource(this.materialTableData);
  filterAll: ISearchResults[] = [];
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  selectOptSearch = {
    searchType: '',
    searchValue: ''
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  id = new FormControl('');
  company_name = new FormControl('');
  deal_type = new FormControl('');
  list_type = new FormControl('');
  deal_id = new FormControl('');
  effective_date = new FormControl('');
  end_date = new FormControl('');
  off_list_date = new FormControl('');
  on_list_date = new FormControl('');
  project_name = new FormControl('');
  ticker_symbol = new FormControl('');
  searchBar = new FormControl('');

  filterValues: any = {
    id: '',
    company_name: '',
    deal_type: '',
    list_type: '',
    deal_id: '',
    effective_date: '',
    end_date: '',
    off_list_date: '',
    on_list_date: '',
    project_name: '',
    ticker_symbol: '',
  };

  events: string[] = [];
  selectedValue = new FormControl('all');
  selectOptions = [
    {
      label: 'All',
      prop: 'all'
    },
    {
      label: 'Company Name',
      prop: 'company_name'
    },
    {
      label: 'Project Name',
      prop: 'project_name'
    },
    {
      label: 'Ticker Symbol',
      prop: 'ticker_symbol'
    },
    {
      label: 'Deal Id',
      prop: 'deal_id'
    }, {
      label: 'Research Toggle',
      prop: 'rcl_research'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {

    this.dataSource.data = this.materialTableData;
    this.dataSource.filterPredicate = this.createFilter();
    this.filterAll = this.materialTableData;

    // values changes for each input from the table column
    this.searchBar.valueChanges.subscribe((value) => {
      if (this.selectedValue.value === 'all') {

        if (value != '') {
          this.dataSource.data = this.filterAll.filter((list: ISearchResults): boolean => {
            return list.id.toString().toLowerCase().indexOf(value) !== -1 ||
              list.company_name.toString().toLowerCase().indexOf(value) !== -1
          });

        } else {
          this.dataSource.data = this.materialTableData;
        }

      } else {

        this.filterValues[this.selectedValue.value] = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    });

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

    this.deal_type.valueChanges
      .subscribe(
        deal_type => {
          this.filterValues.deal_type = deal_type;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.list_type.valueChanges
      .subscribe(
        list_type => {
          this.filterValues.list_type = list_type;
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
          this.filterValues.end_date = this.convertDate(end_date);
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
          this.filterValues.on_list_date = this.convertDate(on_list_date);
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

    this.dataSource.paginator = this.paginator;
  }

  // Filter functionality by Column
  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data: any, filter: any): boolean {
      let searchTerms = JSON.parse(filter);

      return data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
        && data.company_name.toLowerCase().indexOf(searchTerms.company_name) !== -1
        && data.deal_type.toLowerCase().indexOf(searchTerms.deal_type) !== -1
        && data.list_type.toLowerCase().indexOf(searchTerms.list_type) !== -1
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

  selectedOptions(event: any) {
    console.log(this.selectedValue.value);
  }
}

