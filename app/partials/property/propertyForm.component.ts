import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {PropertyService} from "../../_services/properties.service";
import {Client} from "../../_models/client";

@Component({
    moduleId: module.id,
    templateUrl: 'propertyForm.component.html',
    selector: 'property-form',
    providers: [PropertyService]
})

export class PropertyFormComponent {
    @Input() client: Client;
    model: any = {};
    loading = false;
    error = '';
    success = '';
    active = true;
    id: number;

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