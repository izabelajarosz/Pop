import {PipeTransform, Injectable, Pipe} from "@angular/core";

@Pipe({
    name: 'filter'
})

@Injectable()

export class FilterTablePipe implements PipeTransform {
    transform(items: any[], fields: any, value: string): any {
        if (!items) return [];

        return items.filter((it) => {
            let arrayValue = value.split(" ");
            arrayValue = arrayValue.filter(item => item != "");

            if(arrayValue.length == 0)
                return true;


            return this.filterObject(fields, it, value);
        });
    }

    private filterObject(fields: any, it, values: any) {
        let exists = false;

            if (typeof fields === 'object') {
                let valFound = 0;
                for(var i = 0; i < values.length; i++){
                    for (let field of fields) {
                        var item = it[field];

                        if (typeof item === 'number') {
                            item = item.toString();
                        }

                        if (item.toUpperCase().indexOf(values[i].toUpperCase()) > -1) {
                            valFound += 1;
                            if(valFound == values.length){
                                exists = true;
                                break;
                            }
                        }
                    }
                }

            }


            return exists;

    }
}