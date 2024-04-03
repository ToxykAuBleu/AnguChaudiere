import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ChaudiereComponent } from './chaudiere/chaudiere.component';
import { ListChaudiereComponent } from './list-chaudiere/list-chaudiere.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InterventionComponent } from './intervention/intervention.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ChaudiereComponent,
    ListChaudiereComponent,
    InterventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
