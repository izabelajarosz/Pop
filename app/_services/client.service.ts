import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { Client } from '../_models/client';

@Injectable()
export class ClientService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getClients(): Observable<Client[]> {
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/api/clientsList', options)
            .map((response: Response) => response.json());
    }

     removeClient(index, clientsList): Observable<Client[]> {
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  JSON.stringify({ index: index}) });

        return this.http.get('/api/removeClient', options)
             .map((response: Response) => response.json());
    }

     addClient(Client): Observable<boolean> {
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  JSON.stringify({ client: Client}) });
         return this.http.get('/api/addClient', options)
            .map((response: Response) => {
                if (response.status) {
                    return true;
                } else {
                    return false;
                }
            });
    }

     editClient(Client): Observable<boolean> {
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  JSON.stringify({ client: Client}) });

         return this.http.get('/api/editClient', options)
            .map((response: Response) => {
                if (response.status) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    showClient(index):Observable<Client>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  JSON.stringify({ index: index}) });

        return this.http.get('/api/showClient', options)
             .map((response: Response) => response.json());
    }
}