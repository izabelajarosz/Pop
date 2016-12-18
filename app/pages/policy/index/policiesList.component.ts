import {Component, OnInit} from "@angular/core";
import {Policy} from "../../../_models/policy";
import {PolicyService} from "../../../_services/index";

@Component({
    moduleId: module.id,
    templateUrl: 'policiesList.component.html',
    providers: [PolicyService],
})

export class PoliciesListComponent implements OnInit {
    policies: Policy[] = [];

    constructor(private policyService: PolicyService) {
    }

    ngOnInit() {

        this.policyService.getPolicies()
            .subscribe(policies => {
                this.policies = policies;
            });
    }

    removePolicy(id) {
        this.policyService.removePolicy(id)
            .subscribe(policies => {
                this.policies = policies;
            });
    }

}