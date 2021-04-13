import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  buscarPokemon( poke:string ) {
    // console.log(termino);
    this.router.navigate( ['/busqueda', poke] ); 
    // le puse busqueda en app routes ts
  }

}
