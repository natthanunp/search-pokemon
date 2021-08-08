import React from 'react'
import { useQuery } from '@apollo/client'

export const fetchData = (query: any, variables: object) => {
	React.useEffect(() => {
		const { error, data } = useQuery(query, variables)

		if (error) return `Error! ${error.message}`

		return data
	})
}