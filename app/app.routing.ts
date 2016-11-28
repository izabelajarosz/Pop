﻿import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/auth/login/index';
import { HomeComponent } from './pages/home/home.component';
import { ClientsListComponent } from './pages/client/index/clientsList.component';
import { AddClientComponent } from './pages/client/create/addclient.component';
import { ShowClientComponent } from './pages/client/show/showclient.component';
import { EditClientComponent } from './pages/client/edit/editclient.component';

import { PoliciesListComponent } from './pages/policy/index/policiesList.component';
import { ShowPolicyComponent } from './pages/policy/show/showPolicy.component';

import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // Clients
    { path: 'clients', component: ClientsListComponent, canActivate: [AuthGuard] },
    { path: 'clients/create', component: AddClientComponent, canActivate: [AuthGuard]},
    { path: 'clients/:id', component: ShowClientComponent, canActivate: [AuthGuard]},
    { path: 'clients/:id/edit', component: EditClientComponent, canActivate: [AuthGuard]},
    // Policies
    { path: 'policies', component: PoliciesListComponent, canActivate: [AuthGuard] },
    { path: 'policies/:id', component: ShowPolicyComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);