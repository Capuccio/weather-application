interface LoadingProps {
	loading: boolean;
}

export default function LoadingComponents(props: LoadingProps) {
	return (
		<div className={`absolute ${props.loading ? 'flex' : 'hidden'} justify-center items-center bg-white/50 w-full h-full rounded-[2.5rem] top-0 left-0`}>
			<div className='w-12 h-12 border-zinc-400 border-b-transparent border-4 rounded-full animate-spin' />
		</div>
	)
}