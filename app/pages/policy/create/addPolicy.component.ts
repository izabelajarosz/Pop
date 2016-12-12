import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Policy} from "../../../_models/policy";
import {PolicyService} from "../../../_services/policy.service";
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../../../_services/client.service";
import {Client} from "../../../_models/client";
import {Property} from "../../../_models/property";
import {PropertyService} from "../../../_services/properties.service";
// import { ConvertDatePipe } from '../../../_pipes/convertDate.pipe';

@Component({
    moduleId: module.id,
    templateUrl: 'addPolicy.component.html',
    providers: [PolicyService, ClientService, PropertyService]
})

export class AddPolicyComponent implements OnInit {
    clients: Client[] = [];
    properties: Property[] = [];
    model: any = {};
    loading = false;
    error = '';
    success = '';
    active = true;
    selectedClient: Client;

    constructor(private router: Router,
                private policyService: PolicyService,
                private clientService: ClientService,
                private propertyService: PropertyService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.clientService.getClients()
            .subscribe(clients => {
                this.clients = clients;
            });
    }

    onClientChange(clientId){
        this.error = "";
        clientId = parseInt(clientId);
        this.clientService.getProperties(clientId).subscribe(properties => {
             this.properties = properties;
             if(this.properties.length <= 0){
                 this.error = "Wybrany klient nie posiada mienia. Dodaj mienie klienta w celu dodania polisy";
             }else{
                 this.model.propertyId = this.properties[0];
             }
        });

       this.clientService.showClient(clientId).subscribe(
            client => {
                this.selectedClient = client;
       })
    }

    onPropertyChange(id){
        this.model.propertyId = id;
    }

    resetForm() {
        this.model = {};
        this.loading = false;
        this.active = false;
    }

    addPolicy() {
        this.active = false;
    }

    submitForm(){
        this.loading = true;
        this.policyService.addPolicy(this.model, this.selectedClient)
            .subscribe(result => {
                if (result === true) {
                    this.error = '';
                    this.success = 'Polisa została dodana.';
                   // this.router.navigate(['/policies']);
                } else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                    this.loading = false;
                }
            });
    }

}