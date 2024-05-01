import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTrainer } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';
import './styles/homepage.css';

const HomePage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setTrainer(textInput.current.value.trim()));
        textInput.current.value = '';
        navigate('/pokedex');
    }
  return (
    <div className='frente__2'>
      <img className='imagen__1' src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="alt"/>
      <h1 className='text__1'>¡Hola entrenador!</h1>
      <h2 className='text__2'>Para poder comenzar, dame tu nombre</h2>
      <br />
      <form className='text__3' onSubmit={handleSubmit}>
        <input className='input__button' ref={textInput} type="text" />
        <button className='input__button2'>Buscar</button>
      </form>
      <div className='cuadro__1'></div>
      <div className='cuadro__2'></div>
    </div>
  )
}

export default HomePage;