import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IProductSearch, ICollapseDetails } from 'src/app/interface/productDetail.interface';
import { ProductDetailsService } from 'src/app/services/Product_Service/product-details.service';
import { IColumnPipeArgs, IgxGridComponent } from 'igniteui-angular';
import { ISearchResults } from 'src/app/interface/searchResults.interface';
@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  form!: FormGroup;
  showQueue = false;
  productSearch: ICollapseDetails[] = [{
    "name": '',
    show: false
  }];

  viewTable = false;

  searchResults: ISearchResults[] = [{
    id: 1,
    company_name: '',
    cusip6: '',
    cusip_isn: '',
    ticker_symbol: '',
    project_name: '',
    deal_id: 1,
    effective_date: '',
    end_date: '',
    on_list_date: '',
    off_list_date: '',
  }];
  queueResults: any[] = [{
    in_review_by: 1,
    project_name: '',
    company_name: '',
    product_type: '',
    ticker_symbol: '',
    control_room: '',
    modified_type: 1,
    queue_type: '',
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
    this.getProductDetails();
    this.getTableData();
    this.getQueueData();
    // this.buildForm();
  }

  // buildForm(): void {
  //   this.form = this.fb.group({
  //     company_name: new FormControl(''),
  //     ticker_symbol: new FormControl(''),
  //     project_name: new FormControl(''),
  //     deal_id: new FormControl(''),
  //     rcl_research: new FormControl(''),
     
  //   });
  // }

  showSearchOptions(i: number) {
    this.showQueue = !this.showQueue

  }

  getTableData() {
    this.productDetails.getSearchResults().subscribe((data: ISearchResults[]) => {
      this.searchResults = data;
      this.filterData = [...this.searchResults];
    })
  }
  getQueueData() {
    this.productDetails.getQueueResults().subscribe((data: any[]) => {
      console.log(data);
      
      this.queueResults = data;
      this.filterData = [...this.queueResults];
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
