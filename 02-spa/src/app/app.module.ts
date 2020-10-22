import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './app.routes'; // Importamos el sistema de rutas
// Servicios

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING // Añadimos el routing a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
