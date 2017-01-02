import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {AuthenticationService} from "./index";
import {User} from "../_models/user";
import {AbstractService} from "./abstractService";

@Injectable()
export class UserService extends AbstractService {

    constructor(private http: Http,
                protected authenticationService: AuthenticationService) {
        super(authenticationService);
    }

    getUsers(): Observable<User[]> {
        let options = new RequestOptions({headers: this.headers});

        return this.http.get(this.baseUrl + '/api/users', options)
            .map((response: Response) => response.json());
    }
}