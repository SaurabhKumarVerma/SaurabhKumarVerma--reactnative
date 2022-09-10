import { render } from "@testing-library/react-native";
import WomensClothings from "./WomensClothings";

jest.mock(
    'react-native-vector-icons/FontAwesome',
    () => 'FontAwesome',
  );

describe('Testing FlatList', () => {
    test('Render Data', () => {
      const {queryAllByTestId} = render(<WomensClothings />)
        expect(queryAllByTestId('ProductTile')).toBeTruthy()
    })
})