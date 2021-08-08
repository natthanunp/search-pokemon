import React, { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { SearchResult } from './components/SearchResult'
import { Navbar } from 'react-bootstrap'
import Pokemon from './interfaces/pokemon'
import { useApolloClient } from '@apollo/client'
import { GET_POKEMON_BY_NAME } from './graphql/get-pokemons'
import { useLocation, useHistory } from 'react-router-dom'
import './App.css'

const App: React.FC = () => {
  const history = useHistory()
  const useSearchQuery = () => new URLSearchParams(useLocation().search)
  const query = useSearchQuery()

  const client = useApolloClient()
  const [pokemon, setPokemon] = useState<Pokemon | undefined | null>(undefined)
  const [searchKey, setSearchKey] = useState<string>(query.get('name') || '')
  let data: any

  const searchForPokemon = async (pokemonName: string) => {
    try {
      data = await client.query({
        query: GET_POKEMON_BY_NAME,
        variables: { name: pokemonName },
        fetchPolicy: "cache-first"   // select appropriate fetchPolicy
      })
      setPokemon(data.data.pokemon)
    }
    catch {
      setPokemon(null)
    }
  }
  searchForPokemon(searchKey)

  const onSearch = (e: any): void => {
    _handleFilter(e)
  }

  const _handleFilter = (value: any) => {
    setSearchKey(value)
    if (value === '') {
      history.push({ search: `` })
    } else {
      history.push({ search: `?name=${value}` })
    }
    searchForPokemon(value)
  }

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/" style={{ fontSize: "1.5rem" }}>Pokémon Wiki</Navbar.Brand>
      </Navbar>
      <div style={{ margin: "70px" }}>
        <h1>Search</h1>
        <br />
        <SearchBar onSearch={onSearch} />
        <br />
        <SearchResult pokemon={pokemon} />
      </div>
    </div>
  )
}

export default App
