import { forecastIcon } from '@/utilities'

interface CardsProps {
	temp: number;
	icon: string;
	hourOrDay: string;
	acceptHourSystem: boolean;
	hourSystem?: string | false;
}

export default function CardsForecast(props: CardsProps) {
	return (
		<div className='flex-auto'>
			<div className="font-semibold text-[0.79rem] mb-3">{props.temp}°</div>
			<img className='mx-auto' width={30} src={forecastIcon[props.icon]} />
			<div className='font-semibold mt-3'>{props.hourOrDay}</div>
			{props.acceptHourSystem && <div className='text-gray text-sm'>{props.hourSystem}</div>}
		</div>
	)
}