import {Injectable} from "@angular/core";
import {RequestOptions, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Client} from "../_models/client";
import {Policy} from "../_models/policy";
import {Property} from "../_models/property";
import {AbstractService} from "./abstractService";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class ClientService extends AbstractService {

    constructor(private http: Http, protected authenticationService: AuthenticationService) {
        super(authenticationService);
    }

    getClients(): Observable<Client[]> {
        let options = new RequestOptions({headers: this.headers});

        return this.http.get(this.baseUrl + '/api/clients', options)
            .map((response: Response) => response.json());
    }

    removeClient(id): Observable<boolean> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.delete(this.baseUrl + '/api/clients', options)
            .map((response: Response) => response.json().exists);
    }

    addClient(Client): Observable<boolean> {
        let options = new RequestOptions({headers: this.headers, body: {client: Client}});

        return this.http.post(this.baseUrl + '/api/clients', options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    clientExists(pesel): Observable<boolean> {
        let options = new RequestOptions({headers: this.headers, body: {pesel: pesel}});

        return this.http.get(this.baseUrl + '/api/clientExists', options)
            .map((response: Response) => {
                return !(response.status && !response.json().exists);
            });
    }

    editClient(Client): Observable<boolean> {
        let id = Client.id;
        let options = new RequestOptions({headers: this.headers, body: {client: Client}});

        return this.http.patch(this.baseUrl + '/api/clients/' + id, options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    showClient(id): Observable<Client> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.get(this.baseUrl + '/api/clients/' + id, options)
            .map((response: Response) => response.json());
    }

    getPolicies(id): Observable<Policy[]> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.get(this.baseUrl + '/api/clients/' + id + '/policies', options)
            .map((response: Response) => response.json());
    }

    getProperties(id): Observable<Property[]> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.get(this.baseUrl + '/api/clients/' + id + '/properties', options)
            .map((response: Response) => response.json());
    }
}