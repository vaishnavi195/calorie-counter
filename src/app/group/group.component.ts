import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  resultnew;
  Title = 'Calorie Counter';
  Foodlist: any[] = [];
  Foodnew: any[] = [];
  result = this.Foodlist.reduce((accumulator, obj) => {
    return accumulator + obj.calorie;
  }, 0);

  ngOnInit() {
    this.Foodlist = JSON.parse(localStorage.getItem('FoodList'));
  }
  constructor() {}
}
