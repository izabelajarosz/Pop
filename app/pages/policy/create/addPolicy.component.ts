﻿import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Policy} from "../../../_models/policy";
import {PolicyService} from "../../../_services/policy.service";
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../../../_services/client.service";
import {Client} from "../../../_models/client";
// import { ConvertDatePipe } from '../../../_pipes/convertDate.pipe';

@Component({
    moduleId: module.id,
    templateUrl: 'addPolicy.component.html',
    providers: [PolicyService, ClientService]
})

export class AddPolicyComponent implements OnInit {
    clients: Client[] = [];
    model: any = {};
    loading = false;
    error = '';
    success = '';
    active = true;

    constructor(private router: Router,
                private policyService: PolicyService,
                private clientService: ClientService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.clientService.getClients()
            .subscribe(clients => {
                this.clients = clients;
            });
    }

    resetForm() {
        this.model = {};
        this.loading = false;
        this.active = false;
    }

    addPolicy() {
        this.loading = true;
        this.policyService.addPolicy(this.model)
            .subscribe(result => {
                if (result === true) {
                    this.resetForm();
                    this.error = '';
                    this.success = 'Polisa została dodana.';
                    this.router.navigate(['/policies']);
                } else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                    this.loading = false;
                }
            });
    }

}