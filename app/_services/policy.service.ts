import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {AuthenticationService} from "./index";
import {Policy} from "../_models/policy";
import {AbstractService} from "./abstractService";

@Injectable()
export class PolicyService extends AbstractService {

    constructor(private http: Http,
                protected authenticationService: AuthenticationService) {
        super(authenticationService);
    }

    getPolicies(): Observable<Policy[]> {
        let options = new RequestOptions({headers: this.headers});

        return this.http.get(this.baseUrl + '/api/policies', options)
            .map((response: Response) => response.json());
    }

    removePolicy(id): Observable<Policy[]> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.delete(this.baseUrl + '/api/policies', options)
            .map((response: Response) => response.json());
    }

    addPolicy(Policy, Client): Observable<boolean> {
        let options = new RequestOptions({headers: this.headers, body: {policy: Policy, client: Client}});

        return this.http.post(this.baseUrl + '/api/policies', options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    editPolicy(Policy): Observable<boolean> {
        let id = Policy.id;
        let options = new RequestOptions({headers: this.headers, body: {policy: Policy}});

        return this.http.patch(this.baseUrl + '/api/policies/' + id, options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    showPolicy(id): Observable<Policy> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.get(this.baseUrl + '/api/policies/' + id, options)
            .map((response: Response) => response.json());
    }
}