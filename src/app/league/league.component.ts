import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  title: string = "North London dominance in the top flight since 1991";

  constructor() { }

  ngOnInit() {
  }

}
