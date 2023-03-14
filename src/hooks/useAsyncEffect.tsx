import { useEffect } from 'react'

export const useAsyncEffect = (
	asyncFn: () => Promise<any>,
	successFn: Function,
	returnFn: Function,
	dependencies: any[] = []
	) => {
	useEffect(() => {
		let isMounted = true
		asyncFn().then((result) => {
			if (isMounted) successFn(result);
		})
		return () => {
			isMounted = false;
			returnFn && returnFn()
		}
	}, dependencies)
}
