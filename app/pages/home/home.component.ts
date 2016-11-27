﻿import { Component } from '@angular/core';

import { UserService } from '../../_services/user.service';
import { ClientService } from '../../_services/client.service';
import { ClientsListComponent } from '../client/index/clientsList.component';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: [UserService, ClientService]

})

export class HomeComponent {
    orderProperty = 'index';
}