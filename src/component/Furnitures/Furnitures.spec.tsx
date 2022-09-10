import { render } from "@testing-library/react-native";
import Furnitures from "./Furnitures";

jest.mock(
    'react-native-vector-icons/FontAwesome',
    () => 'FontAwesome',
  );

describe('Testing FlatList', () => {
    test('Render Data', () => {
      const {queryAllByTestId} = render(<Furnitures /> )
        expect(queryAllByTestId('ProductTile')).toBeTruthy()
    })
})