import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeagueCountdownComponent } from './league-countdown/league-countdown.component';
import { SpursQuotesComponent } from './spurs-quotes/spurs-quotes.component';
import { HonoursComponent } from './honours/honours.component';
import { NorthLondonComponent } from './north-london/north-london.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueCountdownComponent,
    SpursQuotesComponent,
    HonoursComponent,
    NorthLondonComponent,
    FooterComponent
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
