import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Policy} from "../../../_models/policy";
import {PolicyService} from "../../../_services/policy.service";
import {FormBuilder} from "@angular/forms";
// import { ConvertDatePipe } from '../../../_pipes/convertDate.pipe';

@Component({
    moduleId: module.id,
    templateUrl: 'addPolicy.component.html',
    providers: [PolicyService]
})

export class AddPolicyComponent implements OnInit {
    policies: Policy[] = [];
    model: any = {};
    loading = false;
    error = '';
    success = '';
    active = true;

    constructor(private router: Router,
                private policyService: PolicyService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
    }

    resetForm() {
        this.model = {};
        this.loading = false;
        this.active = false;
    }

    addPolicy() {
        this.loading = true;
        console.log(this.model);
        this.policyService.addPolicy(this.model)
            .subscribe(result => {
                console.log('result', result);
                if (result === true) {
                    this.resetForm();
                    this.error = '';
                    this.success = 'Polisa została dodana.';
                    this.router.navigate(['/policies']);
                } else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                    this.loading = false;
                }
            });
    }

}