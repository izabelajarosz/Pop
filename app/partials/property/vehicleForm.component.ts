import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {PropertyService} from "../../_services/properties.service";
import {ClientService} from "../../_services/client.service";
import {Client} from "../../_models/client";

@Component({
    moduleId: module.id,
    templateUrl: 'vehicleForm.component.html',
    selector: 'vehicle-form',
    providers: [PropertyService, ClientService]
})

export class VehicleFormComponent {
    @Input() client: Client;
    model: any = {};
    loading = false;
    error = '';
    success = '';
    active = true;
    id: number;

    parkingAtNightTypes = [
        {name: 'ulica', vaue: 'ulica'},
        {name: 'parking podziemny', vaue: 'parking podziemny'},
        {name: 'parking strzeżony', vaue: 'parking strzeżony'},
        {name: 'parking niestrzeżony', vaue: 'parking niestrzeżony'},
        {name: 'inne', vaue: 'inne'}
    ];

    vehicleTypes = [
        {name: 'kombi', value:'kombi'},
        {name: 'sedan', value:'sedan'},
        {name: 'coupe', value:'coupe'},
        {name: 'dostawczy', value:'dostawczy'}
    ];

    constructor(private router: Router,
                private propertyService: PropertyService) {
    }

    resetForm() {
        this.model = {};
        this.loading = false;
        this.active = false;
    }

    addProperty() {
        this.loading = true;
        this.model.clientId = this.client.id;

        this.propertyService.addProperty(this.model)
            .subscribe(result => {
                if (result === true) {
                    this.resetForm();
                    this.error = '';
                    this.success = 'Mienie zostało dodane.';

                    setTimeout(() => {
                        this.router.navigate(['/clients/' + this.client.id]);
                    }, 2000);
                } else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                    this.loading = false;
                }
            });
    }

}