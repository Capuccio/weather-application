import { useNavigate } from 'react-router-dom'

export default function Error404() {
	const navigate = useNavigate();

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='mx-auto w-5/12 shadow-card bg-white-card rounded-[2.5rem] p-10 text-center'>
				<span className='bg-[url("https://i.pinimg.com/564x/cc/29/f3/cc29f3ac7630303d2e60eab988cebac8.jpg")] bg-cover bg-clip-text text-transparent text-[18rem]'>404</span>
				<div className='w-1/2 mx-auto border rounded-[2.5rem] border-zinc-300 shadow-card cursor-pointer' onClick={() => navigate("/")}>
					<span className='text-zinc-400'>
						Back
					</span>
				</div>
			</div>
		</div>
	)
}