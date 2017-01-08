import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../../../_services/properties.service";
import {ClientService} from "../../../_services/client.service";
import {Client} from "../../../_models/client";

@Component({
    moduleId: module.id,
    templateUrl: 'addClientProperty.component.html',
    providers: [PropertyService, ClientService]
})

export class AddClientPropertyComponent implements OnInit {
    client: Client = new Client;
    id: number;

    constructor(private route: ActivatedRoute,
                private clientService: ClientService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = parseInt(params['id']);

            this.fetchClient();
        });
    }

    fetchClient(): void {
        this.clientService.showClient(this.id).subscribe(
            client => {
                this.client = client;
            })
    }

}