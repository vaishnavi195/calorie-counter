import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  foodnew: string[] = [];
  transform(foodList: [], searchText: string): any {
    if (!foodList) {
      return [];
    }
    if (!searchText) {
      return foodList;
    }

    console.log(foodList);
    return foodList.filter((food: string) => {
      return food.toLowerCase().includes(searchText);
    });
  }
}
