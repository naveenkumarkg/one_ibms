import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from "../../services/side-navigation.service"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  sideNavList: any = [];

  constructor(private sideNavigationService: SideNavigationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sideNavigationService.getJSON().subscribe((data) => {
      this.sideNavList = data['navigation'];
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
