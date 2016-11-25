import {PipeTransform, Injectable, Pipe} from "@angular/core";

@Pipe({
    name: 'filter'
})

@Injectable()

export class FilterTablePipe implements PipeTransform {
    transform(items: any[], fields: any, value: string): any {
        if (!items) return [];

        return items.filter((it) => {
            if (typeof fields === 'string') {
                return it[fields].toUpperCase().indexOf(value.toUpperCase()) > -1;
            }

            let exists = false;

            if (typeof fields === 'object') {
                for (let field of fields) {
                    if (it[field].toUpperCase().indexOf(value.toUpperCase()) > -1) {
                        exists = true;
                        break;
                    }
                }
            }

            return exists;
        });
    }
}