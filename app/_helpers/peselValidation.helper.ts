import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class PeselValidationHelper {

    constructor() {
    }

    validate(pesel): boolean {
        let sum_nb = 0;
        let steps = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];

        if (pesel.length == 11) {
            let i = 0, len = pesel.length - 1;
            for (; i < len; i++) {
                if (isNaN(parseInt(pesel[i]))) {
                    return false;
                }

                sum_nb += (parseInt(pesel.substring(i, i + 1), 10) * steps[i]);
            }
            let modulo = sum_nb % 10;

            if (modulo == parseInt(pesel.substring(10, 11), 10)) {
                return true;
            }
        }
        return false;

    }
}    
    
    
    