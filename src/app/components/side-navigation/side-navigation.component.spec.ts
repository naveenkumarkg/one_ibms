import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Navigation } from 'src/app/interface/sideNavigation.interface';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { SideNavigationService } from 'src/app/services/side-navigation.service';
import { SideNavigationComponent } from './side-navigation.component';

describe('SideNavigationComponent', () => {
  let component: SideNavigationComponent;
  let fixture: ComponentFixture<SideNavigationComponent>;
  let data: Navigation[] = [{
    "link": '',
    "route": '',
    "show": false,
    "subitems": [{
      "link": '',
      "route": '',
    }],
}]
 

  it('should have title Menu ', () => {
    expect(component.mentuTitle).toEqual("Menu");
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavigationComponent ],
      imports: [HttpClientModule, RouterTestingModule, ],
      providers:[SideNavigationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navigation data', () => expect(component.sideNavList).toEqual(data));
});
