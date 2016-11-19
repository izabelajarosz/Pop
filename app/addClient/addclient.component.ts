import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/user';
import { Client } from '../_models/client';
import { UserService } from '../_services/user.service';
import { ClientService } from '../_services/client.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'addclient.component.html',
    providers: [UserService, ClientService]
})

export class AddClientComponent implements OnInit {
    users: User[] = [];
    clients: Client[] = [];
    model: any = {};
    loading = false;
    error = '';

    constructor( 
    private router: Router,
    private userService: UserService, 
    private clientService: ClientService, 
    private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
    }

    addClient(){
        this.loading = true;
        console.log(this.model);
        console.log("submitted");
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