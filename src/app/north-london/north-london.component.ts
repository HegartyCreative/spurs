import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-north-london',
  templateUrl: './north-london.component.html',
  styleUrls: ['./north-london.component.css']
})
export class NorthLondonComponent implements OnInit {

  title: string = "The inferiority complex";

  constructor() { }

  ngOnInit() {
  }

}
