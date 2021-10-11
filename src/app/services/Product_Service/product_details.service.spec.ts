import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductDetailsService } from './product-details.service';
import { IProductSearch } from '../../interface/productDetail.interface';

describe('SideNavigationService', () => {
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
});