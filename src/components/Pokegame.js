import React, { Component } from 'react';
import Pokedex from './Pokedex';


class Pokegame extends Component {
    render () {
        const pokeList = this.props.pokeList;
        let hand1 = [];
        let hand2 = [...pokeList];

        while(hand1.length < hand2.length) {
            let randIndx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIndx, 1)[0];
            hand1.push(randPokemon)
        }
        console.log(hand1)
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        return(
            <div>
                <Pokedex pokemons={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemons={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}

export default Pokegame;