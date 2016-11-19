import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/home.component';
import { AddClientComponent } from './addClient/addclient.component';
import { ShowClientComponent } from './showClient/showclient.component';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'addclient', component: AddClientComponent, canActivate: [AuthGuard]},
    { path: 'showclient/:id', component: ShowClientComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);