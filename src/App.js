import './App.css';
import pokemon from './pokemon.json'
import styled from "@emotion/styled";
import PokemonRow from './Components/PokemonRow';
import PokemonTable from './Components/PokemonTable';
import PokemonContext from './PokemonContext';
import { useContext, useEffect, useState } from 'react';
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


function App() {
  const [pokemon, pokemonSet] = useState(null);
  const [filter, filterSet] = useState("");
  const [selectedPokemon, selectedPokemonSet] = useState(null);
  useEffect(() => {
    fetch('/starting_react/pokemon.json')
      .then((resp) => (
        resp.json()
      )).then((data) => (pokemonSet(data)));
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
          pokemon,
          filter,
          filterSet,
          selectedPokemon,
          selectedPokemonSet
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
