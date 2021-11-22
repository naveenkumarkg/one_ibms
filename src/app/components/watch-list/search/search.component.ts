import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IProductSearch, ICollapseDetails } from 'src/app/interface/productDetail.interface';
import { ProductDetailsService } from 'src/app/services/Product_Service/product-details.service';
import { IColumnPipeArgs, IgxGridComponent } from 'igniteui-angular';
import { ISearchResults } from 'src/app/interface/searchResults.interface';
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

  searchResults: ISearchResults[] = [{
    projectId: 0,
    dealId: 0,
    projectName: '',
    companyName: '',
    rclStatus: '',
    effectdate: '',
    endDate: '',
    ticker: '',
  }];

  filterData: any;
  @ViewChild('myGrid', { read: IgxGridComponent })
  public grid!: IgxGridComponent;
  public formatDateOptions: IColumnPipeArgs = {
    format: 'mediumDate',
    timezone: 'UTC',
  };

  public formatOptions = this.formatDateOptions;

  constructor(private productDetails: ProductDetailsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.getProductDetails();
    this.getTableData();
    //  this.buildForm();
  }


  buildForm(): void {
    this.form = this.fb.group({
      company_name: new FormControl(''),
      ticker_symbol: new FormControl(''),
      project_name: new FormControl(''),
      deal_id: new FormControl(''),
      rcl_research: new FormControl(''),

    });
  }



  showSearchOptions(i: number) {
    this.productSearch[i]['show'] = !this.productSearch[i]['show'];
    this.viewTable = !this.viewTable

  }

  getTableData() {
    this.productDetails.getSearchResults().subscribe((data: ISearchResults[]) => {
      this.searchResults = data;
  

    });
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
