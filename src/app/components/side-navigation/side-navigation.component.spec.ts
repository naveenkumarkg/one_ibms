import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationComponent } from './side-navigation.component';

describe('SideNavigationComponent', () => {
  let component: SideNavigationComponent;
  let fixture: ComponentFixture<SideNavigationComponent>;
  let data = {
    "navigation": [
      {"link": "Watch List",
        "route": "watch-list",
        "show":false,
        "subitems":[
          {"link": "Search",
          "route": "watch-list/search"}
        ]
      },
      {"link": "Control List",
        "route": "control-list",
        "show":false
      },
      {"link": "Reporting", "route": "reporting", "show":false},
      {"link": "Work Flow","route": "work-flow", "show":false}
    ]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavigationComponent ]
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

  it('should have navigation data', () => {
    expect(component.sideNavList).toEqual(data.navigation);
  });
});
