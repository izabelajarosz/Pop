import {isDevMode} from "@angular/core";
import {Headers} from "@angular/http";
import {AuthenticationService} from "./authentication.service";

export abstract class AbstractService {
    protected baseUrl: string = '';
    protected headers: Headers;

    constructor(protected authenticationService: AuthenticationService) {
        this.headers = new Headers();
        if (isDevMode() === false) {
            this.baseUrl = 'http://ptinsurencesystem.azurewebsites.net'
        } else {
            this.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        }

    }

}