import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)
export class AppService {

constructor(public httpClient: HttpClient) { }

getDeals(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users');
}

postForm(f: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/', f)
}
}
