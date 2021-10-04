import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showSearch = false;
  form!: FormGroup;
  productSearch: any;
  searchResults: any;
  filterData: any;
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
      console.log(this.searchResults)
    })

  }

  getProductDetails() {
    this.productDetails.getProductDetails().subscribe(data => {
      this.productSearch = data["collapse"];
      console.log(this.productSearch)
    })
  }

  search(filters: any): void {
    console.log(filters.value)
    if (filters.value["company_name"] === '') {
      this.searchResults = this.filterData;
    } else {
      this.searchResults = this.searchResults.filter((x: any) => {
        console.log(x)
        console.log('Value',filters.value["company_name"]);
        
        x.company_name.toLowerCase().includes(filters.value["company_name"])
      })
    }
    //  Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    // this.groupFilters.emit(filters);
  }

  reset() {

  }


}
