import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SideNavigationService } from './side-navigation.service';
import { ISidenavigation } from '../../interface/sideNavigation.interface';

describe('SideNavigationService', () => {
  let httpTestingController: HttpTestingController;
  let service: SideNavigationService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(SideNavigationService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  // Service test case for Side Navigation Mock data
  it('#getData should return expected data', (done) => {
    const expectedData: ISidenavigation[] = [{
        "navigation": [{
          "show": false,
          "route": '',
          "link": '',
          "subitems": [{
            "link": '',
            "route": '',
          }]
        }]
      }];

      service.getJSON().subscribe(data => {
        expect(data).toEqual(expectedData);
        done();
      });
      const testRequest = httpTestingController.expectOne('assets/data/side-navigation.json');
      testRequest.flush(expectedData);
  });
});