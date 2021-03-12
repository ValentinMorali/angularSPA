

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pokemones', component: PokemonesComponent },
    { path: 'pokemon/:id', component: PokemonComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);