import { useQuery } from '@tanstack/react-query'

import { getTodo } from 'services/api'

const App = () => {
	const todoDetailQuery = useQuery({
		queryKey: ['get-all'],
		queryFn: () => getTodo(1),
	})

	console.log('todoDetailQuery', todoDetailQuery.data)

	return (
		<div>
			<h1>Hi</h1>
		</div>
	)
}

export default App
