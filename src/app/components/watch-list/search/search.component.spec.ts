import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ICollapseDetails } from 'src/app/interface/productDetail.interface';
import { ProductDetailsService } from '../../../services/Product_Service/product-details.service';
import { SearchComponent } from './search.component';
import { ISearchResults } from './../../../interface/searchResults.interface';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let productSearch: ICollapseDetails[] = [{
    "name": '',
    show: false
  }];

  let searchResults: ISearchResults[] = [{
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [ProductDetailsService],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test case for Collapsable Data
  it('Should have Collapsable data', () => expect(component.productSearch).toEqual(productSearch));
  it('Should hide the table', () => expect(component.viewTable).toBe(false));
});
