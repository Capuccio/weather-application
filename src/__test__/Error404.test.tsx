import { cleanup, screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { Error404 } from '@/pages';

describe("Error404", () => {
	afterEach(cleanup);

	test("render Error404", async () => {
		const component = render(
			<BrowserRouter>
				<Error404 />
			</BrowserRouter>
		)

		expect(component).toBeTruthy;
	})

	test("should show '404' in page", async () => {
		render(
			<BrowserRouter>
				<Error404 />
			</BrowserRouter>
		)

		const message = screen.getByText("404");
		expect(message).toBeInTheDocument();
	})
})