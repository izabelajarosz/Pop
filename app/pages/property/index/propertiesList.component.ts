import {Component, OnInit, ViewContainerRef} from '@angular/core';

import { PropertyService } from '../../../_services/index';
import {Property} from "../../../_models/property";
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
    moduleId: module.id,
    templateUrl: 'propertiesList.component.html',
    providers: [PropertyService],
})

export class PropertiesListComponent implements OnInit {
    properties: Property[] = [];
    success= '';

    constructor(private propertyService: PropertyService,
                overlay: Overlay,
                vcRef: ViewContainerRef,
                public  modal: Modal) { 
                    overlay.defaultViewContainer = vcRef;
                }

    ngOnInit() {

        this.propertyService.getProperties()
            .subscribe(properties => {
                this.properties = properties;
            });
    }

}