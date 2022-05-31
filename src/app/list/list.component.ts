import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() Foodlist;
  @Input() Foodnew;
  resultnew;
  @Input() result;
  @Output() results = new EventEmitter();
  searchText = '';
  constructor() {}
  Remove(i: number) {
    this.Foodlist.splice(i, 1);
    localStorage.setItem('FoodList', JSON.stringify(this.Foodlist));
    this.func();
  }
  ngOnInit() {
    this.func();
  }

  func() {
    this.resultnew = this.Foodlist.reduce((accumulator, obj) => {
      return accumulator + obj.calorie;
    }, 0);
    console.log(this.resultnew);
    this.results.emit(this.resultnew);
  }
}
