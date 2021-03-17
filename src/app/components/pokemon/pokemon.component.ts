import { PokemonesService } from './../../services/pokemones.service';
import { PokemonesComponent } from './../pokemones/pokemones.component';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent{

  pokemon:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _pokemonesService: PokemonesService
                ) {

    this.activatedRoute.params.subscribe( params =>{
      this.pokemon = this._pokemonesService.getPokemon( params['id'] );
      console.log(this.pokemon);
    } )
   }


}
