import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../../_services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../../../_models/client";
import {Policy} from "../../../_models/policy";

import { Modal } from 'angular2-modal/plugins/bootstrap';
@Component({
    moduleId: module.id,
    templateUrl: 'showclient.component.html',
    providers: [ClientService]
})

export class ShowClientComponent implements OnInit {
    client: Client = new Client;
    policies: Policy[] = [];
    id: number;
    private sub: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private clientService: ClientService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.clientService.showClient(this.id).subscribe(
                client => {
                    this.client = client;
                });

            this.clientService.getPolicies(this.id).subscribe(policies => {
                this.policies = policies;
            });
        });
    }

    removeClient() {
        this.clientService.removeClient(this.id)
            .subscribe(clients => {
                this.router.navigate(['/clients']);
            });
    }
}