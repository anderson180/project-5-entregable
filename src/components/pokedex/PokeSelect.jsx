import React, { useEffect, useReducer, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/pokeselect.css'

const PokeSelect = ({setSelectValue}) => {

    const [types, getTypes] = useFetch();

    useEffect(() => {
const url = 'https://pokeapi.co/api/v2/type/';
getTypes(url)
    }, []);
    
    const selectOption = useRef();

    const handleChange = () => {
setSelectValue(selectOption.current.value)
    }

  return (
   <select className='menu__poke' ref={selectOption} onChange={handleChange}>
    <option value="">Todos los Pokemones</option> 
    {
 types?.results.map(type => (
    <option className='color__1'key={type.url} value={type.url}>{type.name}</option>
 ))
    }
   </select>
  )
}

export default PokeSelect;