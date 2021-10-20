import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductDetailsService } from './product-details.service';
import { IProductSearch } from '../../interface/productDetail.interface';
import { ISearchResults } from 'src/app/interface/searchResults.interface';

describe('ProductDetailsService', () => {
  let httpTestingController: HttpTestingController;
  let service: ProductDetailsService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ProductDetailsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  // Service test case for Collapsable Mock data
  it('#getData should return expected data', (done) => {

    const expectedData: IProductSearch = {
      "collapse": [{
        "show": false,
        "name": ''
      }]
    };

    service.getProductDetails().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
    const testRequest = httpTestingController.expectOne('assets/data/data.json');
    testRequest.flush(expectedData);
  });

  it('#getData should return expected data for Tables', (done) => {

    const tableResults: ISearchResults[] = [{
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


    // Table Results 
    service.getSearchResults().subscribe(data => {
      expect(data).toEqual(tableResults);
      done();
    });
    const testRequestForTableData = httpTestingController.expectOne('assets/data/search_table.json');
    testRequestForTableData.flush(tableResults);
  });



});