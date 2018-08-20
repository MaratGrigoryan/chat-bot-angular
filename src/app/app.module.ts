import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularBotModule } from './angular-bot/angular-bot.module';
import { ChatService } from './angular-bot/chat.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularBotModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
