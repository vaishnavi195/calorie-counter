import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() Foodlist;
  @Input() result;

  caloriecnt: number[] = [];
  foodname: string;
  foodtype: string;
  foodquan: number;
  foodcal: number;
  constructor() {}

  ngOnInit() {}
  AddMeal() {
    console.log(this.foodtype);
    this.Foodlist.unshift(
      {
        Foodname: this.foodname,
        FoodType: this.foodtype,
        quantity: this.foodquan,
        calorie: this.foodcal,
      }

      // this.foodname +
      //   '|' +
      //   this.foodtype +
      //   '|' +
      //   this.foodquan +
      //   '|' +
      //   this.foodcal
    );
    this.result = this.Foodlist.reduce((accumulator, obj) => {
      return accumulator + obj.calorie;
    }, 0);
  }
}
