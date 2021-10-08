import { TestBed } from '@angular/core/testing';

import { SideNavigationService } from './side-navigation.service';

describe('SideNavigationService', () => {
  let service: SideNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavigationService);
  });
});
