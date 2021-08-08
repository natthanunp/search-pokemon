export default interface Pokemon {
	id: string
	number: string
	name: string
	classification: string
	types: []
	resistant: []
	weaknesses: []
	image: string
	attacks: {
		fast: [
			{
				name: string,
				type: string,
				damage: number
			}
		],
		special: [
			{
				name: string,
				type: string,
				damage: number
			}
		]
	},
	weight: {
		minimum: number
		maximum: number
	}
	height: {
		minimum: number
		maximum: number
	}
	fleeRate: number
	maxCP: number
	maxHP: number
	evolutions: []
}