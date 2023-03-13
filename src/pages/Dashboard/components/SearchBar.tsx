import { ChangeEvent, KeyboardEvent, FocusEvent, MouseEvent, useState, useRef } from 'react'

import { useLoadAndFetch } from '@/hooks';
import { getCityGeocoding } from '@/services';
import { cityInfo } from '@/models'

import searchIcon from '../../../assets/search.png'

interface SearchProps {
	requestWeatherHandler: Function;
}

export default function SearchBar(props: SearchProps) {
	const { startCalling } = useLoadAndFetch()
	const [inputSearchFocused, setInputSearchFocused] = useState(false)
	const [cityInput, setCityInput] = useState<string>("");
	const [geoList, setGeoList] = useState([]);

	const onChangeHandler = (name: ChangeEvent<HTMLInputElement>) => setCityInput(name.target.value);

	const fetchCityHandler = async () => {
		const cityList = await startCalling(getCityGeocoding(cityInput));
		setGeoList(cityList);
	}

	const onKeyUpHandler = (keyUp: KeyboardEvent<HTMLInputElement>) => (keyUp.key === "Enter" && !!cityInput.trim()) && fetchCityHandler();

	const onClickAndOnBlurHandler = (action: FocusEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>): void => {
		if (action.type === "click") setInputSearchFocused(true);
		else if (action.type === "blur") setInputSearchFocused(false);
	}
	
	const citySelectedHandler = (city: cityInfo): void => {
		props.requestWeatherHandler(city);
		setInputSearchFocused(false);
	}	

	return (
		<div className='my-3 relative'>
			<div className={`flex p-3 bg-white-card shadow-card ${inputSearchFocused && geoList.length > 0 ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
				<img className='opacity-75' width={25} src={searchIcon} />
				<input value={cityInput} className='w-full ml-4 bg-transparent outline-0' type="text" placeholder='Search city' onBlur={onClickAndOnBlurHandler} onClick={onClickAndOnBlurHandler} onChange={onChangeHandler} onKeyUp={onKeyUpHandler} />
			</div>
			<div className={`w-full z-10 absolute ${(inputSearchFocused && geoList.length) ? 'block' : 'hidden'} shadow-list bg-white-card rounded-b-3xl`}>
				{geoList.map((city: cityInfo, i: number) => (
					<div key={i} onMouseDown={() => citySelectedHandler(city)} className='pl-3.5 flex items-center py-1 hover:bg-neutral-100 hover:cursor-pointer last:rounded-b-3xl'>
						<span>{city.name}{city.state && ", " + city.state}</span>
						<img className='ml-3' width={25} src={`https://flagsapi.com/${city.country}/shiny/64.png`} />
					</div>
				))}
			</div>
		</div>
	)
}