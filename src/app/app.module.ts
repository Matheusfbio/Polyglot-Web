import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonParceirosComponent } from './components/button-parceiros/button-parceiros.component';
import { ButtonSubscribeComponent } from './components/button-subscribe/button-subscribe.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { AboutSupportComponent } from './components/about-support/about-support.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, ButtonParceirosComponent, ButtonSubscribeComponent, ButtonLoginComponent, InfoPageComponent, AboutSupportComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
