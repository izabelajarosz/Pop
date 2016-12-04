import {Component, Input} from "@angular/core";
import {Policy} from "../../_models/policy";

@Component({
    moduleId: module.id,
    templateUrl: 'policiesTable.component.html',
    selector: 'policies'
})

export class PoliciesTableComponent {

    @Input() policies: Array<Policy>;

    orderProperty = 'index';
    filterValue = '';
    filteredFields = ['name', 'beginningDate', 'endingDate', 'signDate', 'value'];
}