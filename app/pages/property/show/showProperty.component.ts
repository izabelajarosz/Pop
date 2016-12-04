import {Component, OnInit} from "@angular/core";
import {PropertyService} from "../../../_services/index";
import {ActivatedRoute, Router} from "@angular/router";
import {Property} from "../../../_models/property";

@Component({
    moduleId: module.id,
    templateUrl: 'showProperty.component.html',
    providers: [PropertyService]
})

export class ShowPropertyComponent implements OnInit {
    property: Property = new Property;
    id: number;
    private sub: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private propertyService: PropertyService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = parseInt(params['id']);

            this.propertyService.showProperty(this.id).subscribe(property => {
                this.property = property;
            });
        });
    }

    removeProperty() {
        this.propertyService.removeProperty(this.id)
            .subscribe(properties => {
                this.router.navigate(['/properties']);
            });
    }
}