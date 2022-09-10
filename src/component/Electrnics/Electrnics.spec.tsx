import { render } from "@testing-library/react-native";
import Electrnics from "./Electrnics";

jest.mock(
    'react-native-vector-icons/FontAwesome',
    () => 'FontAwesome',
  );

describe('Testing FlatList', () => {
    test('Render Data', () => {
      const {queryAllByTestId} = render(<Electrnics />
      )
        expect(queryAllByTestId('ProductTile')).toBeTruthy()
    })
})