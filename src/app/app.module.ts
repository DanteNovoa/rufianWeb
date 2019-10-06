import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { APP_ROUTING } from './app.routes';

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { BeatsAvailableComponent } from './componentes/beats-available/beats-available.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';


import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProduccionesComponent } from './componentes/producciones/producciones.component';
import { BeatsPlayerComponent } from './componentes/shared/beats-player/beats-player.component';
import { SocialMediaComponent } from './componentes/shared/social-media/social-media.component';
import { FormContactComponent } from './componentes/shared/form-contact/form-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BeatsAvailableComponent,
    FooterComponent,
    ContactoComponent,
    ProduccionesComponent,
    BeatsPlayerComponent,
    SocialMediaComponent,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
