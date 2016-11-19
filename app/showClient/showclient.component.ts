import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../_models/user';
import { Client } from '../_models/client';
import { UserService } from '../_services/user.service';
import { ClientService } from '../_services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'showclient.component.html',
    providers: [UserService, ClientService]
})

export class ShowClientComponent implements OnInit {
    users: User[] = [];
    clients: Client[] = [];
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute, private userService: UserService, private clientService: ClientService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
    
        this.clientService.showClient(this.id).subscribe(
            client => {
            this.clients = [client];
            console.log(this.clients);
        })
        });
        
           this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });

    }

}