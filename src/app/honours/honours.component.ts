import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honours',
  templateUrl: './honours.component.html',
  styleUrls: ['./honours.component.css']
})
export class HonoursComponent implements OnInit {

  title: string = "Major trophies won since 1991*";

  constructor() { }

  ngOnInit() {
  }

}
