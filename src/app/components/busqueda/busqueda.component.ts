import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute ) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{ 
      console.log(params['poke']);
    })
  }


}
