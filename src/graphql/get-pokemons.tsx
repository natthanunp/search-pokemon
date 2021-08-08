import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      attacks{
        fast{
          name
          type
          damage
        }
        special{
          name
          type
          damage
        }
      }
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`

export const GET_POKEMON_BY_NAME = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      attacks{
        fast{
          name
          type
          damage
        }
        special{
          name
          type
          damage
        }
      }
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  }
`

export const GET_POKEMON_ATTACKS_BY_NAME = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      attacks{
        fast{
          name
          type
          damage
        }
        special{
          name
          type
          damage
        }
    	}
		}
  }
`

export const GET_EVOLUTIONS_BY_NAME = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  }
`