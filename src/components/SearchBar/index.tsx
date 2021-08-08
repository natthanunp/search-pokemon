import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

interface SearchBarProps {
    onSearch: (pokemon: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const [pokemonName, setPokemonName] = useState("")

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPokemonName(e.target.value)
    }

    const searchForPokemon = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(pokemonName)
    }

    return (
        <Form inline onSubmit={searchForPokemon} style={{ margin: "auto", justifyContent: "center" }}>
            <FormControl
                type="text"
                className="mr-sm-2"
                value={pokemonName}
                placeholder="Search Pokemon"
                onChange={handleOnChangeName}
            />
            <Button
                variant="outline-dark"
                type="submit"
            >
                Search
            </Button>
        </Form>
    )
}