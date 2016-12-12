import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { Policy } from '../_models/policy';

@Injectable()
export class PolicyService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getPolicies(): Observable<Policy[]> {
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/api/policies', options)
            .map((response: Response) => response.json());
    }

     removePolicy(id): Observable<Policy[]> {
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.delete('/api/policies', options)
             .map((response: Response) => response.json());
    }

     addPolicy(Policy,Client): Observable<boolean> {
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  { policy: Policy, client:Client} });

         return this.http.post('/api/policies', options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

     editPolicy(Policy): Observable<boolean> {
         let id = Policy.id;
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  { policy: Policy} });

         return this.http.patch('/api/policies/' + id, options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    showPolicy(id):Observable<Policy>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.get('/api/policies/' + id, options)
             .map((response: Response) => response.json());
    }
}