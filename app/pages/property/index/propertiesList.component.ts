import {Component, OnInit} from '@angular/core';

import { PropertyService } from '../../../_services/index';
import {Property} from "../../../_models/property";

@Component({
    moduleId: module.id,
    templateUrl: 'propertiesList.component.html',
    providers: [PropertyService],
})

export class PropertiesListComponent implements OnInit {
    properties: Property[] = [];

    constructor(private propertyService: PropertyService) { }

    ngOnInit() {

        this.propertyService.getProperties()
            .subscribe(properties => {
                this.properties = properties;
            });
    }

    removeProperty(id){
        this.propertyService.removeProperty(id)
            .subscribe(properties => {
                this.properties = properties;
            });
    }

}