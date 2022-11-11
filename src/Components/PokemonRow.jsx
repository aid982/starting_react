import { Button } from "@mui/material";
import PropTypes from "prop-types";

const PokemonRow = ({ pokemon,onClick }) =>
(<tr key={pokemon.id}>
  <td>{pokemon.name.english}</td>
  <td>{pokemon.type.join(", ")}</td>
  <td><Button variant="text" onClick={()=>(onClick(pokemon))}>Details</Button></td>

</tr>);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape(
      {
        english: PropTypes.string
      }
    ),
    type: PropTypes.arrayOf(PropTypes.string)

  }
  )
}

export default PokemonRow;