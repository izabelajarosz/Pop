import {Component, OnInit, DoCheck} from '@angular/core';

import { User } from '../../../_models/user';
import { Client } from '../../../_models/client';
import { UserService } from '../../../_services/user.service';
import { ClientService } from '../../../_services/client.service';

@Component({
    moduleId: module.id,
    templateUrl: 'clientsList.component.html',
    providers: [UserService, ClientService],
})

export class ClientsListComponent implements OnInit {
    users: User[] = [];
    clients: Client[] = [];
    orderProperty = 'index';
    filterValue = '';
    availableFilters = [
        {name: 'firstName', label: 'Imię', state: true},
        {name: 'lastName', label: 'Nazwisko', state: true},
        {name: 'street', label: 'Ulica', state: true},
        // {name: 'pesel', label: "Pesel", state: true}
    ];
    // filteredFields = ['firstName', 'lastName', 'street', 'pesel'];
    filteredFields = ['firstName', 'lastName', 'street'];
    

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
            });
    }

    changeFilteredFields() {
        let fields = this.availableFilters.filter(item => item.state);

        this.filteredFields = fields.map(field => field.name);
    }

}