const mockGeolocation = {
  getCurrentPosition: jest.fn()
    .mockImplementationOnce((cb) => cb({ coords: { latitude: -0.212992, longitude: -78.430208 }})),
  watchPosition: jest.fn()
};

// @ts-expect-error
global.navigator.geolocation = mockGeolocation;