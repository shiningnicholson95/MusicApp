import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GenrepageComponent } from './genrepage/genrepage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { MusicserviceService } from './musicservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    GenrepageComponent,
    EventpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'landingpage', component: LandingpageComponent },
      { path: 'genrepage', component: GenrepageComponent },
      { path: 'eventpage', component: EventpageComponent }



    ])
  ],
  providers: [MusicserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
