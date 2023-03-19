import * as uti from '../utilities'
import '../__mocks__/geolocation.mock'

afterEach(jest.clearAllMocks);

test('get day by date', () => {
	// should have 00:00:00 to exact day, If not will return the day before
	expect(uti.getDayByDate("2023-03-19 00:00:00")).toBe("Sun")
})

test('get user location', async () => {
	const coords = await uti.getUserLocation()
	expect(coords).toStrictEqual({ latitude: -0.212992, longitude: -78.430208 });
})

describe("Utilities", () => {
	describe('Date tests', () => {
		test('Actual date', () => {
			expect(uti.getActualDate()).toBe("2023-03-19");
		})
		test('Date string', () => {
			const actualDate = uti .getActualDate();
			expect(typeof actualDate).toBe("string");
		})
	})
})