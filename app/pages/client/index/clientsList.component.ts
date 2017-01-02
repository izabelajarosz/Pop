import {Component, OnInit} from "@angular/core";
import {Client} from "../../../_models/client";
import {ClientService} from "../../../_services/client.service";

@Component({
    moduleId: module.id,
    templateUrl: 'clientsList.component.html',
    providers: [ClientService],
})

export class ClientsListComponent implements OnInit {
    clients: Client[] = [];
    orderProperty = 'index';
    filterValue = '';
    filteredFields = ['name', 'surname', 'pesel'];


    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
        this.clientService.getClients()
            .subscribe(clients => {
                this.clients = clients;
            });
    }
}