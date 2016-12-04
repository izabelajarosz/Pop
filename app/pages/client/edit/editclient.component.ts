import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../../../_models/client";
import {ClientService} from "../../../_services/client.service";

@Component({
    moduleId: module.id,
    templateUrl: 'editclient.component.html',
    providers: [ClientService],
})

export class EditClientComponent implements OnInit {
    client: Client = new Client;
    loading = false;
    error = '';
    id: number;
    private sub: any;
    peselLengthValid = true;
    success = '';

    constructor(private route: ActivatedRoute, private clientService: ClientService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = parseInt(params['id']);

            this.fetchClient();
        });
    }

    resetForm() {
        this.loading = false;
        this.error = '';
    }

    fetchClient(): void {
        this.clientService.showClient(this.id).subscribe(
            client => {
                this.client = client;
            })
    }

    editClient() {
        if (this.client.pesel.substring(0, 6) != this.client.birthDate.replace(/\D/g, '').substring(2, 8)) {
            this.error = "Pole Pesel nie zgadza się z podaną datą urodzenia. Użytkownik nie został zapisany.";
        }
        else if (this.peselLengthValid) {
            this.loading = true;

            this.clientService.editClient(this.client)
                .subscribe(result => {
                    if (result === true) {
                        this.resetForm();
                        this.success = 'Użytkownik został zapisany.';
                        //this.router.navigate(['/']);
                    } else {
                        this.error = 'Wystąpił nieoczekiwany błąd.';
                        this.loading = false;
                    }
                });
        }

    }

    peselLengthValidation() {
        this.peselLengthValid = this.client.pesel.length <= 11;
    }


}