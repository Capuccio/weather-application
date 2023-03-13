import { useEffect, useState } from 'react'

export default function useLoadAndFetch() {
	const [loading, setLoading] = useState(false);
	let controller: AbortController;

	const startCalling = async (endpointToCall: any) => {
		if (endpointToCall.controller) controller = endpointToCall.controller;
		setLoading(true)
		let result = {} as any;

		try {
			result = await endpointToCall.call;
		} catch (error: any) {
			throw new Error(error);
		}

		setLoading(false);
		return result.json();
	}

	const stopCalling = () => {
		setLoading(false);
		controller && controller.abort();
	}

	useEffect(() => {
		return () => stopCalling();
	}, [])
	
	return { loading, startCalling }
}
