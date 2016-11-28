import {Component, OnInit,  ViewContainerRef, ViewEncapsulation} from "@angular/core";
import {Client} from "../../../_models/client";
import {ClientService} from "../../../_services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Policy} from "../../../_models/policy";
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
    moduleId: module.id,
    templateUrl: 'showclient.component.html',
    providers: [ClientService]
})

export class ShowClientComponent implements OnInit {
    client: Client = new Client;
    policies: Policy[] = [];
    id: number;
    private sub: any;
    success = '';
    error = '';
    active = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private clientService: ClientService,
        overlay: Overlay,
        vcRef: ViewContainerRef,
        public modal: Modal) {
        overlay.defaultViewContainer = vcRef;
 }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.clientService.showClient(this.id).subscribe(
                client => {
                    this.client = client;
                });

            this.clientService.getPolicies(this.id).subscribe(policies => {
                this.policies = policies;
            });
        });
    }

showModal(){
let dialog = this.modal.confirm()
    .title('')
    .body('Czy chcesz usunąć klienta: ' + this.client.firstName + ' ' + this.client.lastName + ' ?')
    .cancelBtn('Anuluj')
    .okBtn('Usuń')
    .isBlocking(true)
    .open()
    .then(dialog =>
        {
            dialog.result.then((returnData) => {
                this.removeClient();
            }, () => {
                // on dismiss/cancel
            });
        });
}
    removeClient(){
    console.log('a');
        this.clientService.removeClient(this.id)
            .subscribe(result => {
                if(result === true){
                    this.success = 'Klient został usunięty';
                    this.active = false;
                    setTimeout(
                        () => {this.router.navigate(['/clients'])},
                        500
                    );
                }
                else {
                    this.error = 'Wystąpił nieoczekiwany błąd.';
                }
            });
    }

}