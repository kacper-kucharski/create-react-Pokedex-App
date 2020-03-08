import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const pokemonObj = this.props.pokemon;
        if (pokemonObj.id < 10) {
            pokemonObj.id = '00' + pokemonObj.id.toString();
        } else if (pokemonObj.id < 100) {
            pokemonObj.id = '0' + pokemonObj.id.toString();
        }
        const pokeImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonObj.id}.png`
        return (
            <div className="Pokecard">
                <h1>{pokemonObj.name}</h1>
                <img src={pokeImage}/>
                <h3>Type: {pokemonObj.type}</h3>
                <h3>EXP: {pokemonObj.base_experience}</h3>
            </div>
        )
    }
}

export default Pokecard;