import styled from "@emotion/styled";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const Input = styled.input`
width: 100%;
padding: 0.2rem;
font-size: large;
`;
const Filter = () => {
    const { filter, filterSet } = useContext(PokemonContext)
    return (
        <>
            <Input value={filter} type="text" onChange={(evt) => (filterSet(evt.target.value))}></Input>
        </>);

}

export default Filter;