import { render } from "@testing-library/react-native";
import DetailScreen from "./DetailScreen";

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const params = {
    productDescriptionText: 'This is Testing',
    productName: 'Google Pixel',
    productImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71ee+5V4ZRL._SX679_.jpg',
    productPrice: 800
}

describe('Testing FlatList', () => {
    test('Render Data', () => {
      const {queryAllByTestId} = render(<DetailScreen route={params} />)
        expect(queryAllByTestId('ProductTile')).toBeTruthy()
    })
})