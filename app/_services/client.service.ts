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

        return this.http.get('/api/clients', options)
            .map((response: Response) => response.json());
    }

     removeClient(index, clientsList): Observable<Client[]> {
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { index: index} });

        return this.http.delete('/api/clients', options)
             .map((response: Response) => response.json());
    }

     addClient(Client): Observable<boolean> {
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  { client: Client} });
         return this.http.post('/api/clients', options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

     editClient(Client): Observable<boolean> {
         let id = Client.id;
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  { client: Client} });

         return this.http.patch('/api/clients/' + id, options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    showClient(index):Observable<Client>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { index: index} });

        return this.http.get('/api/clients/' + index, options)
             .map((response: Response) => response.json());
    }
}