import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { Property } from '../_models/property';

@Injectable()
export class PropertyService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getProperties(): Observable<Property[]> {
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/api/properties', options)
            .map((response: Response) => response.json());
    }

     removeProperty(id): Observable<Property[]> {
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.delete('/api/properties', options)
             .map((response: Response) => response.json());
    }

     addProperty(Property): Observable<boolean> {
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  { property: Property} });

         return this.http.post('/api/properties', options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

     editProperty(Property): Observable<boolean> {
         let id = Property.id;
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  { property: Property} });

         return this.http.patch('/api/properties/' + id, options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    showProperty(id):Observable<Property>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.get('/api/properties/' + id, options)
             .map((response: Response) => response.json());
    }

    propertyHasPolicy(id):Observable<boolean>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.get('/api/properties/haspolice', options)
             .map((response: Response) => {
             return response.json();

            });
      //  return false;
    }
}