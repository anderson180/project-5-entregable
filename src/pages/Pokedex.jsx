import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/pokedex.css';
import useFefch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';

const Pokedex = () => { 

  const [selectValue, setSelectValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [pokemons, getPokemons, getType] = useFefch();

  const trainer = useSelector(store => store.trainer);

  useEffect(() => {
    if (selectValue) {
      getType(selectValue);
    } else {
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
getPokemons(url);
  }
  }, [selectValue]);
  
  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = '';
  }

console.log(pokemons);

const pokeSearch = (poke) => {
  const perName = poke.name.includes(inputValue);
  return perName;
}



  return (
    <div>
        <div className='iman__12'>
          <h2>
          <img className='iman__13' src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="alt"/>
          </h2>
          </div>
      <div className='cuadro__8'></div>
      <br />
      <section className='pokedex'>
<h2 className='pokedex__title'><span>Bienvenido {trainer},</span>aqui podremos encontrar tu pokemon favorito</h2>
<br />
<div className='inpu__menu'>
      <form className='input__butonmodi' onSubmit={handleSubmit}>
        <input className='input__button3' ref={textInput} type="text" />
        <button className='input__button4' >Buscar</button>
      </form>
      <PokeSelect
      setSelectValue={setSelectValue}
      />
      </div>
        <div className='pokedex__container'>
          {
            pokemons?.results.filter(pokeSearch).map((poke) => (
              <PokeCard
              key={poke.url}
              url={poke.url}
              />
            ))
          }
      </div>
      </section>
      </div>
  )
}

export default Pokedex;