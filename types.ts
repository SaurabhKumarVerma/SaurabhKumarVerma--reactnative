import { StackNavigationProp } from "@react-navigation/stack";

export type HomeStackNavigatorParamList = {
    All: undefined;
    DetailScreen: {
        productDescriptionText: string;
        productName: string;
        productPrice: number | string
        productImage: string
    };
    CreateScreen: undefined;
    Tab: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
    HomeStackNavigatorParamList,
    'DetailScreen'
>;

export type ProductTileTypes = {
    id: string;
    name: string;
    avatar: string
    price: number | string;
    description: string
}

export type CreateScreenNavigationProps = StackNavigationProp<
    HomeStackNavigatorParamList,
    'CreateScreen'
>