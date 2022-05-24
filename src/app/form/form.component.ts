import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() Foodlist;

  caloriecnt: number[] = [];
  foodname: string;
  foodtype: string;
  foodquan: number;
  foodcal: number;
  constructor() {}

  ngOnInit() {}
  AddMeal() {
    this.caloriecnt.push(this.foodcal);
    const result = this.caloriecnt.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    console.log(result);
    
    this.Foodlist.unshift(
      this.foodname +
        '|' +
        this.foodtype +
        '|' +
        this.foodquan +
        '|' +
        this.foodcal
    );
  }
}
