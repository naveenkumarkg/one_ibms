import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProductSearch } from '../../interface/productDetail.interface';
import { ISearchResults } from 'src/app/interface/searchResults.interface';


@Injectable({
    providedIn: 'root'
})
export class ProductDetailsService {

    constructor(private http: HttpClient) { }

    public getProductDetails(): Observable<IProductSearch> {
        return this.http.get('assets/data/data.json') as Observable<IProductSearch>;
    }

    public getSearchResults(): Observable<ISearchResults[]> {
        return this.http.get('assets/data/search_table.json') as Observable<ISearchResults[]>;
    }

    public getQueueResults(): Observable<any[]> {
        return this.http.get('assets/data/queue_data.json') as Observable<ISearchResults[]>;
    }
}
