import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { IcsetComponent } from './components/icset/icset.component';
import { TechathlonComponent } from './components/techathlon/techathlon.component';
import { PaperPresentationComponent } from './components/paper-presentation/paper-presentation.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    FooterComponent,
    IcsetComponent,
    TechathlonComponent,
    PaperPresentationComponent,
    TeamDetailsComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
