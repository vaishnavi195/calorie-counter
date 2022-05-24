import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() Foodlist;
  constructor() {}

  ngOnInit() {}
  AddMeal() {
    this.Foodlist.unshift('food2');
  }
}
