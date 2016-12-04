import {Component, Input} from "@angular/core";
import {Property} from "../../_models/property";

@Component({
    moduleId: module.id,
    templateUrl: 'propertiesTable.component.html',
    selector: 'properties'
})

export class PropertiesTableComponent  {

    @Input() properties: Array<Property>;

    orderProperty = 'index';
    filterValue = '';
    filteredFields = ['name', 'value'];
}