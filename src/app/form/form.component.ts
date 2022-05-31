import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() Foodlist;
  resultnew;
  @Output() result = new EventEmitter();

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
    this.resultnew = this.Foodlist.reduce((accumulator, obj) => {
      return accumulator + obj.calorie;
    }, 0);
    console.log(this.resultnew);
    localStorage.setItem('FoodList', JSON.stringify(this.Foodlist));
    this.result.emit(this.resultnew);
  }
}
