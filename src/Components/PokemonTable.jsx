import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
    const {pokemon} = useContext(PokemonContext);
    return (<table width="100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>

        </thead>
        <tbody>
            {pokemon&&pokemon.map((pokemon) => (
                <PokemonRow key={pokemon.id} pokemon={pokemon}></PokemonRow>
            ))}

        </tbody>
    </table>);
}
export default PokemonTable;