import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Client} from "../../../_models/client";
import {ClientService} from "../../../_services/client.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'editclient.component.html',
    providers: [ClientService]
})

export class EditClientComponent implements OnInit {
    client: Client = new Client;
    loading = false;
    error = '';
    id: number;
    private sub: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private clientService: ClientService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.fetchClient();
        });
    }

    fetchClient(): void {
        this.clientService.showClient(this.id).subscribe(
            client => {
                this.client = client;
            })
    }

    editClient() {
        this.loading = true;

        this.clientService.editClient(this.client)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                    this.loading = false;
                }
            });

    }

}