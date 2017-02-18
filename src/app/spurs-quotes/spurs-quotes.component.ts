import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spurs-quotes',
  templateUrl: './spurs-quotes.component.html',
  styleUrls: ['./spurs-quotes.component.css']
})
export class SpursQuotesComponent implements OnInit {

  title: string = "My favourite quotes";

 message = 'Welcome to my App!';
  users = [

    {
    name: "Sir Alan Sugar",
    title: "Ex-Spurs Chairman",
    quote: "We'll win the title within three years",
    date: "October 1996",
    image: './../../assets/images/alan.png'
  },

  {
    name: "Harry Redknapp",
    title: "Spurs Ex-Manager",
    quote: "Being brutally honest, Arsenal are very lucky to have finished the season second and Arsene needs to buy some players over the summer to get anywhere near Spurs",
    date: "May 2016",
    image: './../../assets/images/harry.png'
  },

  {
    name: "Roy Keane",
    title: "Ex-Manchester United player",
    quote: "It was Tottenham at home. I thought: 'Please don't go on about Tottenham, we all know what Tottenham are about. They are nice and tidy but we'll f****** do them.' Alex came in and said: 'Lads, it's only Tottenham.' And that was it! Brilliant!",
    date: "October 2002",
    image: './../../assets/images/roy.png'
  },

  {
    name: "Sol Campbell",
    title: "Ex-Spurs player",
    quote: "I'm staying",
    date: "January 2001",
    image: './../../assets/images/sol.png'
  },

    {
    name: "Martin Jol",
    title: "Ex-Spurs manager",
    quote: "This is one of the biggest clubs in Europe and I want to be part of its history.",
    date: "November 2004",
    image: './../../assets/images/martin.png'
  },

    {
    name: "Clive Allen",
    title: "Ex-Spurs coach",
    quote: " He refused to shake my hand. He says he didn’t see or hear me. But he’s two-bob, he is.",
    date: "July 1997",
    image: './../../assets/images/clive.png'
  },

      {
    name: "Arsene Wenger",
    title: "Arsenal manager",
    quote: "Have Tottenham closed the gap on Arsenal? Last time I checked they were still 4 miles and 11 titles away",
    date: "September 2016",
    image: './../../assets/images/arsene.png'
  },

        {
    name: "Frank Lampard",
    title: "Ex-Chelsea player",
    quote: "It is always bad to lose to Tottenham because they make DVDs of it for the next ten years",
    date: "June 2015",
    image: './../../assets/images/frank.png'
  }
  
  ];

  activeUser;

  selectUser(user){
    this.activeUser = user;
  }

  constructor() { }

  ngOnInit() {
  }

}
