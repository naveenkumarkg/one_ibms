
import { Component, Input, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatTableDataSource } from '@angular/material/table';
import { ISearchResults } from 'src/app/interface/searchResults.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mat-search-table',
  templateUrl: './mat-search-table.component.html',
  styleUrls: ['./mat-search-table.component.scss'],

})
export class MatSearchTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['projectId', 'dealId', 'projectName', 'companyName', 'rclStatus', 'effectdate', 'endDate', 'ticker'];
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

  projectId = new FormControl(''); //
  dealId = new FormControl(''); //
  projectName = new FormControl(''); //
  companyName = new FormControl(''); //
  rclStatus = new FormControl('');
  effectdate = new FormControl(''); //
  endDate = new FormControl(''); //
  ticker = new FormControl(''); //

  searchBar = new FormControl('');

  filterValues: any = {
    projectId: '',
    dealId: '',
    projectName: '',
    companyName: '',
    rclStatus: '',
    effectdate: '',
    endDate: '',
    ticker: '',
  };

  events: string[] = [];
  selectedValue = new FormControl('all');

  key?: string;
  selectOptions = [
    {
      label: 'All',
      prop: 'all'
    },
    {
      label: 'Company Name',
      prop: 'companyName'
    },
    {
      label: 'Project Name',
      prop: 'projectName'
    },
    {
      label: 'Ticker Symbol',
      prop: 'ticker'
    },
    {
      label: 'Deal Id',
      prop: 'dealId'
    }, {
      label: 'Research Toggle',
      prop: 'rclStatus'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {

    this.dataSource.data = this.materialTableData;
    this.dataSource.filterPredicate = this.createFilter();
    this.filterAll = [...this.materialTableData];

    // values changes for each input from the table column
    this.searchBar.valueChanges.subscribe((value) => {
      console.log(value)
      if (this.selectedValue.value === 'all') {

        if (value != '') {
          this.dataSource.data = this.filterAll.filter((list: ISearchResults): boolean => {
            return list.projectId.toString().toLowerCase().indexOf(value) !== -1 ||
              list.companyName.toLowerCase().indexOf(value) !== -1 ||
              list.dealId.toString().toLowerCase().indexOf(value) !== -1 ||
              list.rclStatus.toLowerCase().indexOf(value) !== -1 ||
              list.ticker.toLowerCase().indexOf(value) !== -1 ||
              list.projectName.toLowerCase().indexOf(value) !== -1;
          });

        } else {
          this.dataSource.data = this.materialTableData;
        }

      } else {

        this.filterValues[this.selectedValue.value] = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    });

    this.projectId.valueChanges
      .subscribe(
        projectId => {
          this.filterValues.projectId = projectId;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.companyName.valueChanges
      .subscribe(
        companyName => {
          this.filterValues.companyName = companyName;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.dealId.valueChanges
      .subscribe(
        dealId => {
          this.filterValues.dealId = dealId;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.effectdate.valueChanges
      .subscribe(
        effectdate => {
          this.filterValues.effectdate = this.convertDate(effectdate);
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.endDate.valueChanges
      .subscribe(
        endDate => {
          this.filterValues.endDate = this.convertDate(endDate);
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.projectName.valueChanges
      .subscribe(
        projectName => {
          this.filterValues.projectName = projectName;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.ticker.valueChanges
      .subscribe(
        ticker => {
          this.filterValues.ticker = ticker.toLowerCase();
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.rclStatus.valueChanges
      .subscribe(
        rclStatus => {
          this.filterValues.rclStatus = rclStatus.toLowerCase();
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

      return data.projectId.toString().toLowerCase().indexOf(searchTerms.projectId) !== -1
        && data.companyName.toLowerCase().indexOf(searchTerms.companyName) !== -1
        && data.dealId.toString().toLowerCase().indexOf(searchTerms.dealId) !== -1
        && data.effectdate.toLowerCase().indexOf(searchTerms.effectdate) !== -1
        && data.endDate.toLowerCase().indexOf(searchTerms.endDate) !== -1
        && data.projectName.toLowerCase().indexOf(searchTerms.projectName) !== -1
        && data.ticker.toLowerCase().indexOf(searchTerms.ticker) !== -1
        && data.rclStatus.toLowerCase().indexOf(searchTerms.rclStatus) !== -1;
    }
    return filterFunction;
  }

  selectedOptions(event: any) {
    console.log(this.selectedValue.value);
  }
}

