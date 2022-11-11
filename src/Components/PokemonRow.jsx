import PropTypes from "prop-types";

const PokemonRow = ({ pokemon }) =>
(<tr key={pokemon.id}>
  <td>{pokemon.name.english}</td>
  <td>{pokemon.type.join(", ")}</td>
</tr>);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape(
      {
        english: PropTypes.string
      }
    ),
    type: PropTypes.arrayOf(PropTypes.string)

  })
}

export default PokemonRow;