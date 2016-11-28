import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';

import { LoginComponent } from './pages/auth/login/index';
import { HomeComponent } from './pages/home/home.component';

import { AddClientComponent } from './pages/client/create/addclient.component';
import { ShowClientComponent } from './pages/client/show/showclient.component';
import { EditClientComponent } from './pages/client/edit/editclient.component';
import { ClientsListComponent } from './pages/client/index/clientsList.component';

import { PoliciesListComponent } from './pages/policy/index/policiesList.component';

import { NavbarComponent } from './partials/general/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertDateDirective } from "./_directives/convertDate.directive";
import { FilterTablePipe } from  './_pipes/filterTable.pipe';
import {PoliciesTableComponent} from "./partials/policy/policiesTable.component";
import {ShowPolicyComponent} from "./pages/policy/show/showPolicy.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule, 
        ModalModule.forRoot(),
        BootstrapModalModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AddClientComponent,
        ShowClientComponent,
        EditClientComponent,
        ClientsListComponent,

        PoliciesListComponent,
        ShowPolicyComponent,

        NavbarComponent,
        FilterTablePipe,
        ConvertDateDirective,
        PoliciesTableComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        CookieService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }