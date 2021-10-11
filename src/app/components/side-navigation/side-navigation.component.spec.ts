import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Navigation } from 'src/app/interface/sideNavigation.interface';
import { SideNavigationService } from 'src/app/services/side_navigation_service/side-navigation.service';
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
 
 // Test case to check the title variable
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


  // Test case for side Navigation
  it('should have navigation data', () => expect(component.sideNavList).toEqual(data));
});
