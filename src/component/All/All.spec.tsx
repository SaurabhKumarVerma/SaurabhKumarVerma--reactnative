import { render } from "@testing-library/react-native";
import All from "./All";

jest.mock(
    'react-native-vector-icons/FontAwesome',
    () => 'FontAwesome',
  );

describe('Testing FlatList', () => {
    test('Render Data', () => {
      const {queryAllByTestId} = render(
        <All />,
      )
        expect(queryAllByTestId('ProductTile')).toBeTruthy()
    })
})