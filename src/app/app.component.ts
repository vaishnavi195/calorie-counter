import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  Title = 'Calorie Counter';
  Foodlist: any[] = [
    {
      Foodname: 'idli',
      FoodType: 'Breakfast',
      quantity: '100gms',
      calorie: 200,
    },
    {
      Foodname: 'dosa',
      FoodType: 'Breakfast',
      quantity: '100gms',
      calorie: 200,
    },
    {
      Foodname: 'sambar sadham',
      FoodType: 'Breakfast',
      quantity: '100gms',
      calorie: 200,
    },
    {
      Foodname: 'chapathi',
      FoodType: 'Breakfast',
      quantity: '100gms',
      calorie: 200,
    },
  ];
  caloriecnt: number[] = [];
}
