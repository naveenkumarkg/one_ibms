import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ISidenavigation } from '../interface/sideNavigation.interface';


@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any>{
    return this.http.get('assets/data/side-navigation.json') as Observable<ISidenavigation>;
  }
}
