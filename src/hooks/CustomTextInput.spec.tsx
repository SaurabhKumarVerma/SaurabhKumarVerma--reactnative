import { render } from "@testing-library/react-native";
import CustomTextInput from "./CustomTextInput";

describe('Render TestInput', () => {
    it('It Should Render', () => {
        const {getByTestId} = render(<CustomTextInput/>)
        expect(getByTestId('textInput')).toBeTruthy();
    });
})