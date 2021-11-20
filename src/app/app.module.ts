import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { ServicesComponent } from './services/services.component';
// import { PackagesComponent } from './packages/packages.component';
// import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
// import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutusComponent,
    routingComponents,
    // ServicesComponent,
    // PackagesComponent,
    // ContactComponent,
    FooterComponent,
    // BookingComponent,
    HeaderComponent,
    // PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
