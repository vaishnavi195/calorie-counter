import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() Foodlist;
  @Input() result;
  constructor() {}
  Remove(i: number) {
    this.Foodlist.splice(i, 1);
    localStorage.setItem('FoodList', this.Foodlist);
  }
  ngOnInit() {}
}
