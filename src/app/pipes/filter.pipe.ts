import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string, itemName: string, filterString: any): any {

    if (filterString === '' || filterString === undefined) {
      return value;
    }

    const resultArray = [];
    for (const item of value) {


      if (itemName === 'date') {
        var inputDate = new Date(filterString);
        var reminderDate = new Date(item[itemName]);
        if (reminderDate <= inputDate) resultArray.push(item);

      } else {
        if (item[itemName].indexOf(filterString) !== -1) {
          resultArray.push(item);
        }
      }
    }

    return resultArray;

  }

}
