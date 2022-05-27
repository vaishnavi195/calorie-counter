import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  Title = 'Calorie Counter';
  Foodlist: any[] = [];

  result = this.Foodlist.reduce((accumulator, obj) => {
    return accumulator + obj.calorie;
  }, 0);

  ngOnInit() {
    this.Foodlist = JSON.parse(localStorage.getItem('FoodList'));
  }
}
