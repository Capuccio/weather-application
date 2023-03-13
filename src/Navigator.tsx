import { createBrowserRouter } from 'react-router-dom'

import { Dashboard, Error404 } from '@/pages'

const navigator = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '*',
		element: <Error404  />
	}
])

export default navigator