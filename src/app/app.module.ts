import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeagueCountdownComponent } from './league-countdown/league-countdown.component';
import { SpursQuotesComponent } from './spurs-quotes/spurs-quotes.component';
import { TrophyCountdownComponent } from './trophy-countdown/trophy-countdown.component';
import { HonoursComponent } from './honours/honours.component';
import { LeagueComponent } from './league/league.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueCountdownComponent,
    SpursQuotesComponent,
    TrophyCountdownComponent,
    HonoursComponent,
    LeagueComponent,
    TrophyCountdownComponent,
    TrophyCountdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
