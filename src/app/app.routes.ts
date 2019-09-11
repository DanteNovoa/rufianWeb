import { RouterModule, Routes} from "@angular/router";  
import { HomeComponent } from './componentes/home/home.component';
import { Component } from "@angular/core";
import { BeatsAvailableComponent } from './componentes/beats-available/beats-available.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProduccionesComponent } from './componentes/producciones/producciones.component';

const APP_ROUTES: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'beats', component: BeatsAvailableComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'producciones', component: ProduccionesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
  
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES) 