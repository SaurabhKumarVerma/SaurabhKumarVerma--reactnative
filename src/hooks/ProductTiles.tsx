import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { HomeScreenNavigationProp } from '../../types';
import { color } from '../constant/color';

const ScreenWidth = Dimensions.get("window").width;

interface Props {
    productName: string;
    productImage: string;
    productPrice: number | string;
    productDescriptionText: string
}

const ProductTiles: React.FC<Props> = ({ productName, productImage, productPrice, productDescriptionText }) => {
    const navigation = useNavigation<HomeScreenNavigationProp>()
    return (
        <View style={styles.container}>

            <View style={styles.cards}>
                <View style={styles.profileBoxShadow}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('DetailScreen', {
                            productName: productName,
                            productImage: productImage,
                            productPrice: productPrice,
                            productDescriptionText: productDescriptionText
                        })
                    }} style={styles.cardIn}>
                        <Image style={styles.image} source={{ uri: productImage }} />
                        <View style={styles.cardDetail}>
                            <View style={{ marginHorizontal: 5 }}>
                                <Text style={styles.cardHeader}>{productName}</Text>
                                <Text style={styles.cardPrice}>$ {productPrice} </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: (ScreenWidth - 40) / 2,
        marginHorizontal: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    profileBoxShadow: {
        flex: 1,
        margin: 5,
        elevation: 14,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            width: 0,
            height: StyleSheet.hairlineWidth,
        },
    },
    cards: {
        flexDirection: 'row',
        marginTop: 10,
    },
    cardIn: {
        justifyContent: 'center',
    },
    cardDetail: {
        backgroundColor: color.black,
        borderRadius: 5,
    },
    cardHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        color: color.white
    },
    cardPrice: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 6,
        color: color.white
    },
    image: {
        height: 230,
        width: "100%",
    },
});

export default ProductTiles
