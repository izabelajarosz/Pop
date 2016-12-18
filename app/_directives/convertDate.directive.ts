import {Directive} from "@angular/core";
import {NgModel} from "@angular/forms";

@Directive({
    selector: '[ngModel][convertDate]',
    providers: [NgModel],
    host: {
        '(ngModelChange)': 'onInputChange($event)'
    }
})

export class ConvertDateDirective {
    constructor(private model: NgModel) {
    }

    private previousVar = "";

    onInputChange(event) {
        if (this.previousVar.length < event.length) {
            let newVal = event.replace(/\D/g, '');

            if (newVal.length >= 6)
                newVal = newVal.slice(0, 4) + "-" + newVal.slice(4, 6) + "-" + newVal.slice(6, 8);
            else if (newVal.length >= 4)
                newVal = newVal.slice(0, 4) + "-" + newVal.slice(4);

            this.model.valueAccessor.writeValue(newVal);

        }
        this.previousVar = event;
    }
}