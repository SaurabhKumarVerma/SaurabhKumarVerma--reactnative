/* eslint-disable */
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

global.ReanimatedDataMock = {
  now: () => 0,
};

const mockedNavigate = jest.fn();
jest.useFakeTimers()
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});


jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
