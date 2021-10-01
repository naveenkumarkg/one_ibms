import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
showSearch = false;
  constructor(private productDetails: ProductDetailsService) { }
productSearch:any;
  ngOnInit(): void {
    this.getProductDetails();
  }

  showSearchOptions(i: number){
    // this.showSearch = !this.showSearch
    this.productSearch[i]['show'] = !this.productSearch[i]['show']

  }

  getProductDetails(){
    this.productDetails.getProductDetails().subscribe(data =>{ 
      console.log("data",data)
      this.productSearch = data["collapse"];
      console.log(this.productSearch)
    })
  }
}
