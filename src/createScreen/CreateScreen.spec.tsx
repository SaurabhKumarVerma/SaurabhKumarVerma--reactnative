import { render } from "@testing-library/react-native";
import CreateScreen from "./CreateScreen";

describe('Render TestInput', () => {
    it('It Should Render Product Title', () => {
        const { getByPlaceholderText } = render(<CreateScreen />)
        expect(getByPlaceholderText('Product Title')).toBeTruthy()
    });

    it('It Should Render Price', () => {
        const { getByPlaceholderText } = render(<CreateScreen />)
        expect(getByPlaceholderText('Price')).toBeTruthy()
    });

    it('It Should Render Description', () => {
        const { getByPlaceholderText } = render(<CreateScreen />)
        expect(getByPlaceholderText('Description')).toBeTruthy()
    });

    it('It Should Render Image Link', () => {
        const { getByPlaceholderText } = render(<CreateScreen />)
        expect(getByPlaceholderText('Image Link')).toBeTruthy()
    });
})

describe("renderItem", () => {
    it('Render Selected Category', () => {
        const { queryAllByText } = render(<CreateScreen />)
        expect(queryAllByText('Accessories')).toBeTruthy()
    })
});