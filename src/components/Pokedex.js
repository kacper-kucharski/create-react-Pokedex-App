import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        const pokemonsList = this.props.pokemons;
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                <p>Total Experience: {this.props.exp}</p>
                <p>{this.props.isWinner ? 'WINNER!' : 'LOSER!'}</p>
                <div className="Pokedex-cards">
                    {pokemonsList.map((p) => (
                        <Pokecard pokemon={p} />
                    ))}
                </div>
                
            </div>
        )
    }
}

export default Pokedex;