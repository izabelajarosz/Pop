import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from '../../../_models/client';
import { ClientService } from '../../../_services/client.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { ConvertDatePipe } from '../../../_pipes/convertDate.pipe';

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
    success= '';
    active = true;

    constructor( 
    private router: Router,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {}
    resetForm(){
        this.model = {};
        this.loading = false;
        this.active = false;
    }
    addClient(){
        if(this.model.pesel.substring(0,6) != this.model.birthDate.replace(/\D/g,'').substring(2,8)){
            this.error = "Pole Pesel nie zgadza się z podaną datą urodzenia. Użytkownik nie został zapisany.";
        }
        else{
            this.loading = true;
            this.clientService.clientExists(this.model.pesel).subscribe(exists => {
                 if(!exists){
                    this.clientService.addClient(this.model)
                    .subscribe(result => {
                            if (result === true) {
                                this.resetForm();
                                this.error = '';
                                this.success = 'Użytkownik został dodany.';
                            // this.router.navigate(['/']);
                            } else {
                                this.error = 'Wystąpił nieoczekiwany błąd.';
                                this.loading = false;
                            }
                        });
                  }else{
                      this.error = 'Użytkownik o podanym numerze pesel już istnieje.';
                      this.loading = false;
                  }
            });
        }
    }

}