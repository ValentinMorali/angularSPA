import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { PokemonesService } from './services/pokemones.service';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PokemonesComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    PokemonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
