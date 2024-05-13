import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeinfo.css'


const PokeInfo = () => {

  const params = useParams();

  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    getPokemon(url);
  }, []);

  console.log(pokemon);

  const obj = {
    width: '50%',
  }

  return (
    <div className='pokeinfo__container'>
       <div className='iman__12'>
          <h2>
          <img className='iman__13' src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="alt"/>
          </h2>
          </div>
      <div className='cuadro__8'></div>
      <br />
    <div className='pokeinfo__1'>
    <section className='pokeinfo'>
      <div className={`pokeinfo__colores ${pokemon?.types[0].type.name}`}>
      <figure>
        <img  src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
      </figure>
      </div>
      <br />
      <span># {pokemon?.id}</span>
      <h2>{pokemon?.name}</h2>
      <ul>
        <li><span>weight</span><span>{pokemon?.weight}</span></li>
        <li><span>height</span><span>{pokemon?.height}</span></li>
      </ul>
      <div className='pokeinfo__tipos'>
        <article>
          <h3>type</h3>
          <ul>
            {
              pokemon?.types.map(type => (
                <li key={type.type.url}>{type.type.name}</li>
              ))
            }
          </ul>
        </article>
        <article>
          <h3>skills</h3>
          <ul className='pokeinfo__stats'>
            {
              pokemon?.abilities.map(skill => (
                <li key={skill.ability.url}>{skill.ability.name}</li>
              ))
            }
          </ul>
        </article>
      </div>
      <h2>Stats</h2>
      <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map(stat => (
            <li key={stat.stat.url}><span>{stat.stat.name}:</span>
              <span>{stat.base_stat}/150</span>
              <div className='stats__bar'><div style={obj} className='stats__prog'></div></div></li>
          ))
        }
      </ul>
      </section>
      <br />
      <div className='pokeinfo__2'>
      <h2>Movements</h2>
      <ul>
        {
          pokemon?.moves.map(move => (
            <li key={move.move.url}>{move.move.name}</li>
          ))
        }
      </ul>
      </div>
      </div>
      </div>
  )
}

export default PokeInfo;