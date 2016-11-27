import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from '../../../_models/client';
import { ClientService } from '../../../_services/client.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'addclient.component.html',
    providers: [ClientService]
})

export class AddClientComponent implements OnInit {
    clients: Client[] = [];
    model: any = {};
    loading = false;
    error = '';

    constructor( 
    private router: Router,
    private clientService: ClientService,
    private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
    }

    addClient(){
        this.loading = true;
        this.clientService.addClient(this.model)
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