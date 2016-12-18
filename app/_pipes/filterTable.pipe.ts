import {PipeTransform, Injectable, Pipe} from "@angular/core";

@Pipe({
    name: 'filter'
})

@Injectable()

export class FilterTablePipe implements PipeTransform {
    transform(items: any[], fields: any, value: string): any {
        if (!items) return [];

        let values = value.split(" ").filter(item => item != "");

        if (values.length < 1)
            return items;

        return items.filter((item) => this.filterObject(fields, item, values));
    }

    private filterObject(fields: any, element: any, values: any) {
        let exists = false;

        if (typeof fields === 'object') {
            let valFound = 0;
            for (let value of values) {
                for (let field of fields) {
                    let item = element[field];

                    if (typeof item === 'number') {
                        item = item.toString();
                    }

                    if (typeof item === 'string' && item.toUpperCase().indexOf(value.toUpperCase()) > -1) {
                        valFound += 1;
                        break;
                    }
                }

                if (valFound === values.length) {
                    exists = true;
                    break;
                }
            }
        }

        return exists;
    }
}