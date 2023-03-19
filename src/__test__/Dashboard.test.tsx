import { cleanup, render } from '@testing-library/react';
import { Dashboard } from '@/pages';

describe("Dashboard", () => {
	afterEach(cleanup);

	test("Render dashboard", async () => {
		const component = render(<Dashboard />);
		expect(component).toBeTruthy;
	})
})