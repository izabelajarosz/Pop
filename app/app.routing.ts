import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/auth/login/index';
import { HomeComponent } from './pages/home/home.component';
import { ClientsListComponent } from './pages/client/index/clientsList.component';
import { AddClientComponent } from './pages/client/create/addclient.component';
import { ShowClientComponent } from './pages/client/show/showclient.component';
import { EditClientComponent } from './pages/client/edit/editclient.component';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'clients', component: ClientsListComponent, canActivate: [AuthGuard] },
    { path: 'addclient', component: AddClientComponent, canActivate: [AuthGuard]},
    { path: 'showclient/:id', component: ShowClientComponent, canActivate: [AuthGuard]},
    { path: 'editclient/:id', component: EditClientComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);