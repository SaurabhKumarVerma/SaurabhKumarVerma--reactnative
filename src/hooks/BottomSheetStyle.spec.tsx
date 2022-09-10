import { render } from "@testing-library/react-native";
import React from "react";
import BottomSheetStyle from "./BottomSheetStyle";


describe('Render BottomSheet', () => {
    it('It Should Render', () => {
        const { getAllByTestId } = render(<BottomSheetStyle DescriptionText="" ProductName="" ProductPrice=''  />)
        expect(getAllByTestId('BottomSheetScroll')).toBeTruthy();
    });
})
