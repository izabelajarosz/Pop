import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
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
    model: any = {};
    loading = false;
    error = '';
    success = '';
    active = true;
    id: number;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private propertyService: PropertyService,
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

    resetForm() {
        this.model = {};
        this.loading = false;
        this.active = false;
    }

    addProperty() {
        this.loading = true;
        this.model.clientId = this.id;

        this.propertyService.addProperty(this.model)
            .subscribe(result => {
                if (result === true) {
                    this.resetForm();
                    this.error = '';
                    this.success = 'Mienie zostało dodane.';
                    this.router.navigate(['/clients/' + this.id]);
                } else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                    this.loading = false;
                }
            });
    }

}