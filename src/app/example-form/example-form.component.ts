import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {
  test= {};

  constructor() { }

  ngOnInit() {
    this.test = {};
  }

}
