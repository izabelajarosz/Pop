import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { Client } from '../_models/client';
import {Policy} from "../_models/policy";
import {Property} from "../_models/property";

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

     removeClient(id): Observable<boolean> {
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.delete('/api/clients', options)
             .map((response: Response) => response.json().exists);
    }

     addClient(Client): Observable<boolean> {
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body: { client: Client} });

         return this.http.post('/api/clients', options, options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    clientExists(pesel): Observable<boolean>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body: { pesel: pesel} });
         return this.http.get('/api/clientExists', options)
            .map((response: Response) => {
                return !(response.status && !response.json().exists);
            });
    }

     editClient(Client): Observable<boolean> {
         let id = Client.id;
         let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
         let options = new RequestOptions({ headers: headers, body:  { client: Client} });

         return this.http.patch('/api/clients/' + id, options, options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    showClient(id):Observable<Client>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.get('/api/clients/' + id, options)
             .map((response: Response) => response.json());
    }

    getPolicies(id):Observable<Policy[]>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.get('/api/clients/' + id + '/policies', options)
            .map((response: Response) => response.json());
    }

    getProperties(id):Observable<Property[]>{
        let headers = new Headers({ 'Authorization': 'Authorization ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers, body:  { id: id} });

        return this.http.get('/api/clients/' + id + '/properties', options)
            .map((response: Response) => response.json());
    }
}