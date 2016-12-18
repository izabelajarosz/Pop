import {PipeTransform, Injectable, Pipe} from "@angular/core";

@Pipe({
    name: 'filterDates'
})

@Injectable()

export class FilterDatesPipe implements PipeTransform {
    transform(items: any[], startValue: string, endValue: string): any {
        if (!items) return [];

        if (endValue.length < 1 || startValue.length < 1)
            return items;

        return items.filter((item) => this.filterObject(startValue, item, endValue));
    }

    private filterObject(startValue: any, element: any, endValue: any) {
        let exists = false;

            let endedAt = element["endedAt"].replace(/\D/g,'');
            let startedAt = element["startedAt"].replace(/\D/g,'');
            startValue = startValue.replace(/\D/g,'');
            endValue = endValue.replace(/\D/g,'');
            
            if(startValue.substring(0,endValue.length) > endValue ){
                exists = false;
            }
            else if(startedAt.substring(0,startValue.length) <= startValue && startValue <= endedAt.substring(0,startValue.length)){
                exists = true;
            }
            else if(startedAt.substring(0,endValue.length) <= endValue && endValue <= endedAt.substring(0,endValue.length)){
               exists = true;
            }
            else if(startedAt.substring(0,startValue.length) >= startValue && endValue >= endedAt.substring(0,endValue.length)){
                exists = true;
            }

        return exists;
    }
}