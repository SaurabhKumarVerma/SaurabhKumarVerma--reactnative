import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import BottomSheetStyle from '../../hooks/BottomSheetStyle'

interface Props {
    route: RouteProp<{ params: { productDescriptionText: string, productName: string, productImage: string, productPrice: number } }, 'params'>
}
const DetailScreen: React.FC<Props> = ({ route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: route.params.productImage }}
                />
            </View>
            <BottomSheetStyle
                DescriptionText={route.params.productDescriptionText}
                ProductName={route.params.productName}
                ProductPrice={route.params.productPrice}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageStyle: { 
        width: '90%', 
        height: '50%', 
        resizeMode: 'contain' 
    },
    imageContainer: { 
        justifyContent: 'center', 
        marginHorizontal: 10 
    }
})

export default DetailScreen
