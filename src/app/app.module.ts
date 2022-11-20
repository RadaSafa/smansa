import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, NewsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, Ng2SearchPipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
