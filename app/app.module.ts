import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/home.component';
import {AddClientComponent} from './addClient/addclient.component';
import {ShowClientComponent} from './showClient/showclient.component'
import { ReactiveFormsModule } from '@angular/forms';
import {OrderBy} from "./_directives/orderBy";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AddClientComponent,
        ShowClientComponent,
        OrderBy
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        CookieService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }