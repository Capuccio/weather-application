import { cleanup, render, screen } from '@testing-library/react';
import { SearchBar } from '@/pages/Dashboard/components';

describe("SearchBar", () => {
	afterEach(cleanup);

	test("render searchbar component", async () => {
		const component = render(<SearchBar requestWeatherHandler={() => {}} />)
		expect(component).toBeTruthy;
	})

	test("should show 'Search city' placeholder", async () => {
		render(<SearchBar requestWeatherHandler={() => {}} />)

		const placeholder = screen.getByPlaceholderText("Search city");
		expect(placeholder).toBeInTheDocument();
	})
})