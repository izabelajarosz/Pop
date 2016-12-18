import {Component, Input, ViewContainerRef} from "@angular/core";
import {Property} from "../../_models/property";
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/bootstrap";
import { PropertyService } from '../../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'propertiesTable.component.html',
    selector: 'properties',
    providers: [PropertyService]
})

export class PropertiesTableComponent  {
        constructor(private propertyService: PropertyService,
                overlay: Overlay,
                vcRef: ViewContainerRef,
                public  modal: Modal) { 
                    overlay.defaultViewContainer = vcRef;
                }
    @Input() properties: Array<Property>;

    orderProperty = 'index';
    filterValue = '';
    filteredFields = ['name', 'value'];
    success= '';
    error = '';

 showModal(id) {
     this.error = '';
     this.success = '';
        let dialog = this.modal.confirm()
            .title('')
            .body('Czy chcesz usunąć mienie?')
            .cancelBtn('Anuluj')
            .okBtn('Usuń')
            .isBlocking(true)
            .open()
            .then(dialog => {
                dialog.result.then((returnData) => {
                    this.removeProperty(id);
                }, () => {
                    // on dismiss/cancel
                });
            });
    }

    removeProperty(id){
        this.propertyService.propertyHasPolicy(id)
        .subscribe(result => {
                if (result === true) {
                    this.success= '';
                    this.error = "Nie można usunąć mienia gdyż jest ono objęte aktywną polisą";
                }else{
                    this.propertyService.removeProperty(id)
                    .subscribe(properties => {
                        let index = null;
                        for (let i = 0; i < properties.length; i++) {
                            if (properties[i].id === id) {
                                index = id;
                                break;
                            }
                        }

                        this.properties = this.properties.slice(index, 1);

                        this.error='';
                        this.success = 'Mienie zostało usunięte';
                    });
                }
        });
        
       
    }
}