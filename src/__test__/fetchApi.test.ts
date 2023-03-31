import { mockCurrentWeatherList, mockForecastList } from '@/__mocks__'
import { getCityGeocoding, getCurrentWeather, getForecast } from '@/services'

let globalFetch = {} as any;

beforeAll(() => {
  globalFetch = global.fetch;
  global.fetch = jest.fn()
                  .mockResolvedValueOnce(({ json: () => Promise.resolve({ lat: 1.0, lon: 1.0 })}))
                  .mockResolvedValueOnce(({ json: () => Promise.resolve(mockCurrentWeatherList) }))
                  .mockResolvedValueOnce(({ json: () => Promise.resolve(mockForecastList) }));
})

afterAll(() => {
  global.fetch = globalFetch;
  jest.clearAllMocks;
})

describe("Fetch apies" , () => {
  test("getCityGeocoding", async () => {
    const result = await getCityGeocoding("maracay").call;
    const resultJson = await result.json();
    expect(resultJson).toEqual({lat: 1.0, lon: 1.0});
  })

  test("getCurrentWeather", async () => {
    const result = await getCurrentWeather(10.2375144, -67.5890216).call;
    const resultJson = await result.json();
    expect(resultJson).toHaveProperty("weather");
  })

  test("getForecast", async () => {
    const result = await getForecast(10.2375144, -67.5890216).call;
    const resultJson = await result.json();
    expect(resultJson).toHaveLength(10);
  })
})
