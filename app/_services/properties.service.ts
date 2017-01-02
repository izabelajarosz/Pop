import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {AuthenticationService} from "./index";
import {Property} from "../_models/property";
import {AbstractService} from "./abstractService";

@Injectable()
export class PropertyService extends AbstractService {

    constructor(private http: Http,
                protected authenticationService: AuthenticationService) {
        super(authenticationService);
    }

    getProperties(): Observable<Property[]> {
        let options = new RequestOptions({headers: this.headers});

        return this.http.get(this.baseUrl + '/api/properties', options)
            .map((response: Response) => response.json());
    }

    removeProperty(id): Observable<Property[]> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.delete(this.baseUrl + '/api/properties', options)
            .map((response: Response) => response.json());
    }

    addProperty(Property): Observable<boolean> {
        let options = new RequestOptions({headers: this.headers, body: {property: Property}});

        return this.http.post(this.baseUrl + '/api/properties', options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    editProperty(Property): Observable<boolean> {
        let id = Property.id;
        let options = new RequestOptions({headers: this.headers, body: {property: Property}});

        return this.http.patch(this.baseUrl + '/api/properties/' + id, options)
            .map((response: Response) => {
                return !!response.status;
            });
    }

    showProperty(id): Observable<Property> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.get(this.baseUrl + '/api/properties/' + id, options)
            .map((response: Response) => response.json());
    }

    propertyHasPolicy(id): Observable<boolean> {
        let options = new RequestOptions({headers: this.headers, body: {id: id}});

        return this.http.get(this.baseUrl + '/api/properties/haspolicy', options)
            .map((response: Response) => {
                return response.json();

            });
        //  return false;
    }
}