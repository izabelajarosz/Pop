import {Component, OnInit, Input} from "@angular/core";
import {Policy} from "../../_models/policy";

@Component({
    moduleId: module.id,
    templateUrl: 'policiesTable.component.html',
    selector: 'policies'
})

export class PoliciesTableComponent  {

    @Input() policies: Array<Policy>;

    orderProperty = 'index';
    filterValue = '';
    startedAtfilterValue = '';
    endedAtfilterValue = '';
    filteredFields = ['name', 'value', 'surname'];
}