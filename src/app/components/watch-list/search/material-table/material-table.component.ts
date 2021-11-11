import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ISearchResults } from 'src/app/interface/searchResults.interface';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'company_name', 'cusip6', 'cusip_isn', 'deal_id', 'effective_date', 'end_date', 'off_list_date', 'on_list_date', 'project_name', 'ticker_symbol'];
  @Input() materialTableData: ISearchResults[] = [];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.materialTableData);
  }

}
