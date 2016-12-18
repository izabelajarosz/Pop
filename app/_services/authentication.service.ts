import {Injectable, isDevMode} from "@angular/core";
import {Http, Response, URLSearchParams, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
    public token: string;
    private baseUrl: string = '';

    constructor(private http: Http) {
        if (isDevMode() === false) {
            this.baseUrl = 'http://ptinsurencesystem.azurewebsites.net'
        }

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.access_token;
    }

    login(username: string, password: string) {
        let body = null;

        if (isDevMode()) {
            body = {username: username, password: password};
        } else {
            body = new URLSearchParams();
            body.set('username', username);
            body.set('password', password);
            body.set('grant_type', 'password');
        }

        let options = new RequestOptions();

        return this.http.post(this.baseUrl + '/api/login', body, options)
            .map((response: Response) => {
                let responseBody = response.json();

                if (responseBody && responseBody.hasOwnProperty('access_token')) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(responseBody));
                    this.token = responseBody.access_token;

                    return true;
                }

                return false;
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}