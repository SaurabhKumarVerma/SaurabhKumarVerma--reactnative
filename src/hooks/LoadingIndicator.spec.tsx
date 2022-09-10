import { render } from "@testing-library/react-native";
import { View, ActivityIndicator } from "react-native";

describe('Render TestInput', () => {
    it('It Should Render', () => {
        const { getByAccessibilityHint } = render(
            <View>
                <ActivityIndicator accessibilityHint='loading' />
            </View>
        )
        getByAccessibilityHint('loading') 
    });
})