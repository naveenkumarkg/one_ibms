import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IProductSearch, ICollapseDetails } from 'src/app/interface/productDetail.interface';
import { ProductDetailsService } from 'src/app/services/Product_Service/product-details.service';
import { IColumnPipeArgs, IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  productSearch: ICollapseDetails[] = [{
    "name": '',
    show: false
  }];

  viewTable = false;

  searchResults: any;
  filterData: any;
  @ViewChild('myGrid', { read: IgxGridComponent })
  public grid!: IgxGridComponent;
  public formatDateOptions: IColumnPipeArgs  = {
    format: 'mediumDate',
    timezone: 'UTC',
  };

  public formatOptions = this.formatDateOptions;

  constructor(private productDetails: ProductDetailsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getProductDetails();
    this.getTableData();
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      company_name: new FormControl(''),
      cusip6: new FormControl(''),
      cusip_isn: new FormControl(''),
      ticker_symbol: new FormControl(''),
      project_name: new FormControl(''),
      deal_id: new FormControl(''),
      lob_type: new FormControl(''),
      mar_flg: new FormControl(''),
      rcl_research: new FormControl(''),
      deal_status: new FormControl(''),
      follow_start: new FormControl(''),
      follow_end: new FormControl(''),
      list_type: new FormControl(''),
      added_by: new FormControl(''),
      top_panel: new FormControl(''),
      effective_date: new FormControl(''),
      end_date: new FormControl(''),
      on_list_date: new FormControl(''),
      off_list_date: new FormControl('')
    });
  }

  showSearchOptions(i: number) {
    this.productSearch[i]['show'] = !this.productSearch[i]['show']

  }

  getTableData() {
    this.productDetails.getSearchResults().subscribe(data => {
      this.searchResults = data;
      this.filterData = [...this.searchResults];
    })

  }

  getProductDetails() {
    this.productDetails.getProductDetails().subscribe((data: IProductSearch) => {
      this.productSearch = data["collapse"];
      return this.productDetails;
    })
  }

  search(formValue: any): void {
    this.viewTable = true;
  }

  reset() {
    this.form.reset();
    this.viewTable = false;
  }
}
