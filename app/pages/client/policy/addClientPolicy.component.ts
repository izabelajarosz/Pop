import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {PolicyService} from "../../../_services/policy.service";
import {ClientService} from "../../../_services/client.service";
import {Client} from "../../../_models/client";
import {Property} from "../../../_models/property";

@Component({
    moduleId: module.id,
    templateUrl: 'addClientPolicy.component.html',
    providers: [PolicyService, ClientService]
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
        this.loading = true;
        this.model.clientId = this.client.id;

        this.policyService.addPolicy(this.model)
            .subscribe(result => {
                if (result === true) {
                    this.resetForm();
                    this.error = '';
                    this.success = 'Polisa została dodana.';
                    this.router.navigate(['/clients/' + this.model.clientId]);
                } else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                    this.loading = false;
                }
            });
    }

}