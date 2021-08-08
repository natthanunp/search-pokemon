import { ListGroup } from 'react-bootstrap'
import Pokemon from '../../interfaces/pokemon'

interface SearchResultProps {
	pokemon: Pokemon | undefined | null
}

export function SearchResult({ pokemon }: SearchResultProps) {
	if (pokemon === undefined) {
		return <></>
	}

	if (pokemon === null) {
		return <div>Not found, gotta find em' all!</div>
	}

	return (
		<div style={{ width: "18rem", margin: "auto" }}>
			<img alt={pokemon.name} src={pokemon.image} />
			<br />
			<h1>{pokemon.name}</h1>
			<ListGroup>
				<ListGroup.Item variant="light" style={{ fontFamily: 'Courier New' && "monospace", textTransform: "capitalize" }}>
			<p>#{pokemon.number}</p>
			<p>Classification: {pokemon.classification}</p>
			<p>Types: {pokemon.types}</p>
			<p>Resistant: {pokemon.resistant.map((item, index) => (index ? ', ' : '') + item)}</p>
			<p>Weaknesses: {pokemon.weaknesses.map((item, index) => (index ? ', ' : '') + item)}</p>
			<p>Fast Attacks: {pokemon.attacks.fast.map((item, index) => (index ? ', ' : '') + item.name + ' Type: ' + item.type + ' DMG: ' + item.damage)}</p>
			<p>Special Attacks: {pokemon.attacks.special.map((item, index) => (index ? ', ' : '') + item.name + ' Type: ' + item.type + ' DMG: ' + item.damage)}</p>
			<p>Weight minimum/maximum: {pokemon.weight.minimum + '/' + pokemon.weight.maximum}</p>
			<p>Height minimum/maximum: {pokemon.height.minimum + '/' + pokemon.height.maximum}</p>
			<p>Flee rate: {pokemon.fleeRate}</p>
			<p>Max CP: {pokemon.maxCP}</p>
					<p>Max HP: {pokemon.maxHP}</p>
					<h1>Evolutions:</h1> {pokemon.evolutions ? pokemon.evolutions.map((item: any, index) => <a href={'?name=' + item.name}>{(index ? ', ' : '') + item.name}</a>) : 'none'}
				</ListGroup.Item>
			</ListGroup>
			<br />
		</div>
	)
}