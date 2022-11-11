import './App.css';
import pokemon from './pokemon.json'
import styled from "@emotion/styled";
import PokemonRow from './Components/PokemonRow';
import PokemonTable from './Components/PokemonTable';
import PokemonContext from './PokemonContext';
import { useContext, useEffect, useReducer, useState } from 'react';
import Filter from './Components/Filter';
import { PokemonInfo } from './Components/PokemonInfo';

const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;
const pokemonReducer = (state,action)=>{
  switch(action.type) {
    case 'SET_FILTER': 
    return {
      ...state,
      filter:action.payload,
    }
    case 'SELECT_POKEMON': return {
      ...state,
      selectedPokemon:action.payload,
    }
    case 'GET_POKEMON': return {
      ...state,
      pokemon:action.payload,
    }
    default: throw Error("Unknown action");

  }

}

function App() {  
  const [state,dispatch] = useReducer(pokemonReducer,{
    pokemon:[],
    filter:"",
    selectedPokemon:null

  })
  useEffect(() => {
    fetch('/starting_react/pokemon.json')
      .then((resp) => (
        resp.json()
      )).then((data) => (dispatch({type:'GET_POKEMON',payload:data})));
  }, []);  
  if (!pokemon) {
    return <div>Loading data</div>;
  }
  return (
    <div style={{
      margin: "auto", width: 800,
      paddingTop: "1rem"
    }}>
      <Title>Pokemon Search</Title>
      <PokemonContext.Provider
        value={{          
          state,
          dispatch
        }}>
        <PageContainer>
          <Filter />
          <TwoColumnLayout>
            <PokemonTable />
          </TwoColumnLayout>
          <PokemonInfo/>
        </PageContainer>
      </PokemonContext.Provider>


    </div >
  );
}

export default App;
