import {Component, OnInit} from "@angular/core";
import {User} from "../../_models/user";
import {UserService} from "../../_services/user.service";

@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    providers: [UserService],
    selector: 'navbar'
})

export class NavbarComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit() {

        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

}