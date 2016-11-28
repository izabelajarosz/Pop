import {Component, OnInit} from "@angular/core";
import {PolicyService} from "../../../_services/policy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Policy} from "../../../_models/policy";
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
    moduleId: module.id,
    templateUrl: 'showPolicy.component.html',
    providers: [PolicyService]
})

export class ShowPolicyComponent implements OnInit {
    policy: Policy = new Policy;
    id: number;
    private sub: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private policyService: PolicyService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.policyService.showPolicy(this.id).subscribe(policy => {
                this.policy = policy;
                console.log(policy, this.policy);
            });
        });
    }

    removePolicy() {
        this.policyService.removePolicy(this.id)
            .subscribe(policies => {
                this.router.navigate(['/policies']);
            });
    }
}