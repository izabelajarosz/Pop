import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../_models/user';
import { Client } from '../_models/client';
import { UserService } from '../_services/user.service';
import { ClientService } from '../_services/client.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: [UserService, ClientService]
})

export class HomeComponent implements OnInit {
    users: User[] = [];
    clients: Client[] = [];
    orderProperty = 'index';

    constructor(private userService: UserService, private clientService: ClientService) { }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });

        this.clientService.getClients()
            .subscribe(clients => {
            this.clients = clients;
            });
    }

    removeClient(index){
        this.clientService.removeClient(index, this.clients)
         .subscribe(clients => {
            this.clients = clients;
            });;
    }

}