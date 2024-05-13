import React, { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/pokecard.css'
import { useNavigate } from "react-router-dom";

const PokeCard = ({url}) => {

const [pokemon, getPokemon] = useFetch();

const navigate = useNavigate();

useEffect(() => {
    getPokemon(url);
}, []);

const hadlePokemon = () => {
    navigate(`/pokedex/${pokemon.id}`);
}

  return (
   <article onClick={hadlePokemon} className='pokecard'>
    
    <div className={`pokecard__back ${pokemon?.types[0].type.name}`}>
    
    <figure className='pokecard__img'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
    </figure>
    <div className="pokecard__caja">
    <h3 className='pokecard__name'>{pokemon?.name}</h3>
    <ul className='pokecard__types'> 
    {
pokemon?.types.map(type => (
    <li className={`slot${type.slot}`} key={type.type.url}>{type.type.name}</li>
))
    }
    </ul>
    <span>type</span>
    <br />
    <hr className="hr__2"/>
    <ul className='pokecard__stats'>
        {
            pokemon?.stats.map(stat => (
                !stat.stat.name.includes('-') &&
                <li key={stat.stat.url}><span>{stat.stat.name}</span>{stat.base_stat}<span></span></li>
            ))
        }
    </ul>
    </div>
    </div>
    
   </article>
  )
}

export default PokeCard;