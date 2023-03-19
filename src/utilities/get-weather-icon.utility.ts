import sunIcon from '@/assets/weatherIcon/01d.png';
import sunCloudIcon from '@/assets/weatherIcon/02d.png';
import sunScatteredCloudIcon from '@/assets/weatherIcon/03d.png';
import sunRain from '@/assets/weatherIcon/10d.png';

import moonIcon from '../assets/weatherIcon/01n.png'
import moonCloudIcon from '@/assets/weatherIcon/02n.png';
import moonScatteredCloudIcon from '@/assets/weatherIcon/03n.png';
import moonRain from '@/assets/weatherIcon/10n.png';

import brokenClouds from '@/assets/weatherIcon/04.png';
import showerRainIcon from '@/assets/weatherIcon/09.png';
import thunderstormIcon from '../assets/weatherIcon/11.png'
import snowIcon from '@/assets/weatherIcon/13.png';
import mistIcon from '@/assets/weatherIcon/50.png';

export const weatherIcon: {[index: string]: any} = {
	'01d': sunIcon,
	'02d': sunCloudIcon,
	'03d': sunScatteredCloudIcon,
	'04d': brokenClouds,
	'09d': showerRainIcon,
	'10d': sunRain,
	'11d': thunderstormIcon,
	'13d': snowIcon,
	'50d': mistIcon,
	'01n': moonIcon,
	'02n': moonCloudIcon,
	'03n': moonScatteredCloudIcon,
	'04n': brokenClouds,
	'09n': showerRainIcon,
	'10n': moonRain,
	'11n': thunderstormIcon,
	'13n': snowIcon,
	'50n': mistIcon,
}