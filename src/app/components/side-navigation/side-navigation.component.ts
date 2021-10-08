import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from "../../services/side-navigation.service"
import { ActivatedRoute, Router } from '@angular/router';
import { ISidenavigation, Navigation } from '../../interface/sideNavigation.interface';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  sideNavList: Navigation[] = [{
    "link": '',
    "route": '',
    "show": false,
    "subitems": [{
      "link": '',
      "route": '',
    }],

  }]
  mentuTitle = 'Menu'

  constructor(private sideNavigationService: SideNavigationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.sideNavigationService.getJSON().subscribe((data: ISidenavigation) => {
      this.sideNavList = data["navigation"];
      return this.sideNavList;

    })
  }

  showSubMenu(route: string, list: any, i: any) {
    if (list.subitems?.length) {
      this.sideNavList[i]["show"] = !this.sideNavList[i]["show"];
    } else {
      this.router.navigateByUrl(route)
    }
  }

  subItemRoute(subItem: string) {
    this.router.navigate([subItem], { relativeTo: this.route })
  }

}
