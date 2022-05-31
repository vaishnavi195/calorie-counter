import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  foodnew: string[] = [];
  transform(foodList: [], searchText: string, foodname: []): any {
    if (!foodList) {
      return [];
    }
    if (!searchText) {
      return foodList;
    }

    console.log(foodList);
    return foodList.filter((food: any) => {
      // return food.FoodType.includes(searchText);
      return food.FoodType.includes(searchText);
    });
  }
}
