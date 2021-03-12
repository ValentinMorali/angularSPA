import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PokemonesService {


    private pokemones:Pokemon[] = [
        {
            nombre: "Bulbasaur",
            bio: "Bulbasaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Squirtle y Charmander (excepto en Pokémon Amarillo). Destaca por ser el primer Pokémon de la Pokédex Nacional",
            img: "assets/img/Bulbasaur.png"

        },
        {
            nombre: "Charmander",
            bio: "Charmander es un Pokémon de tipo fuego introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Bulbasaur y Squirtle, excepto en Pokémon Amarillo y Pokémon: Let's Go, Pikachu! y Pokémon: Let's Go, Eevee!",
            img: "assets/img/Charmander.png"

        },
        {
            nombre: "Feraligatr",
            bio: "Feraligatr es un Pokémon de tipo agua introducido en la segunda generación. Es la evolución de Croconaw.",
            img: "assets/img/Feraligatr.png"

        },
        {
            nombre: "Lugia",
            bio: "Lugia es un Pokémon legendario de tipo psíquico/volador introducido en la segunda generación. Conocido como La deidad de los mares o El Misterio de las islas remolino, tiene su ubicación en las Islas Remolino",
            img: "assets/img/lugia.png"

        },
        {
            nombre: "Mew",
            bio: "Mew es un Pokémon singular de tipo psíquico introducido en la primera generación. Es el ancestro de todos los Pokémon, ya que tiene todos los genes de los Pokémon existentes. Además, es el único Pokémon capaz de aprender todas las máquinas técnicas (MT), máquinas ocultas (MO) y movimientos del tutor de movimientos",
            img: "assets/img/Mew.png"

        },
        {
            nombre: "Quilava",
            bio: "Quilava es un Pokémon tipo fuego introducido en la segunda generación. Es la evolución de Cyndaquil, uno de los Pokémon iniciales de la región Johto",
            img: "assets/img/Quilava.png"

        },
        {
            nombre: "Tyranitar",
            bio: "Tyranitar es un Pokémon de tipo roca/siniestro introducido en la segunda generación. Es la evolución de Pupitar, a partir de la sexta generación puede megaevolucionar en Mega-Tyranitar",
            img: "assets/img/Tyranitar.png"

        }
    ];

    constructor() {
        console.log("Servicio listo para usar");
    }

    getPokemones(): Pokemon[]{
        return this.pokemones;
    }
}

export interface Pokemon{
    nombre: string;
    bio: string;
    img: string;
};