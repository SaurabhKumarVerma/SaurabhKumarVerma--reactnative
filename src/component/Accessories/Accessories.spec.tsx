import { render } from "@testing-library/react-native";
import Accessories from "./Accessories";

jest.mock(
    'react-native-vector-icons/FontAwesome',
    () => 'FontAwesome',
  );

describe('Testing FlatList', () => {
    test('Render Data', () => {
      const {queryAllByTestId} = render(
        <Accessories />,
      )
        expect(queryAllByTestId('ProductTile')).toBeTruthy()
    })
})