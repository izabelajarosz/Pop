import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {PolicyService} from "../../../_services/policy.service";
import {ClientService} from "../../../_services/client.service";
import {Client} from "../../../_models/client";
import {Property} from "../../../_models/property";
import {PropertyService} from "../../../_services/properties.service";

@Component({
    moduleId: module.id,
    templateUrl: 'addClientPolicy.component.html',
    providers: [PolicyService, ClientService, PropertyService]
})

export class AddClientPolicyComponent implements OnInit {
    client: Client = new Client;
    properties: Property[] = [];
    model: any = {};
    loading = false;
    error = '';
    success = '';
    active = true;
    id: number;


    constructor(private router: Router,
                private route: ActivatedRoute,
                private policyService: PolicyService,
                private clientService: ClientService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = parseInt(params['id']);

            this.fetchClient(id);

            this.clientService.getProperties(id).subscribe(properties => {
                this.properties = properties;
                if (this.properties.length <= 0) {
                    this.error = "Wybrany klient nie posiada mienia. Dodaj mienie klienta w celu dodania polisy";
                }
            });
        });
    }

    fetchClient(id): void {
        this.clientService.showClient(id).subscribe(
            client => {
                this.client = client;
            })
    }

    resetForm() {
        this.model = {};
        this.loading = false;
        this.active = false;
    }

    addPolicy() {
        this.active = false;
    }

    submitForm() {
        this.loading = true;
        this.policyService.addPolicy(this.model, this.client)
            .subscribe(result => {
                if (result === true) {
                    this.error = '';
                    this.success = 'Polisa została dodana.';
                    setTimeout(() => {
                        this.router.navigate(['/policies']);
                    }, 2000);
                } else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                    this.loading = false;
                }
            });
    }

}