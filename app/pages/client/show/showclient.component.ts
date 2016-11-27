import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../../_services/client.service";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../../../_models/client";

@Component({
    moduleId: module.id,
    templateUrl: 'showclient.component.html',
    providers: [ClientService]
})

export class ShowClientComponent implements OnInit {
    client: Client = new Client;
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute, private clientService: ClientService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.clientService.showClient(this.id).subscribe(
                client => {
                    this.client = client;
                });
        });
    }

}