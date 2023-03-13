import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components';

const Layout = () => {
	return (
		<div className='h-screen grid grid-cols-[250px_1fr]'>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Layout;