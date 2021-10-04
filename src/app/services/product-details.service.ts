import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProductDetailsService {

    constructor(private http: HttpClient) { }

    public getProductDetails(): Observable<any> {
        return this.http.get('assets/data/data.json');
    }

    public getSearchResults(): Observable<any> {
        return this.http.get('assets/data/search_table.json');
    }
}
