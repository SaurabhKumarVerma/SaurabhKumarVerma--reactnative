import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { color } from '../constant/color'

interface Props { }

const LoadingIndicator: React.FC<Props> = () => {
    return (
        <View >
            <ActivityIndicator size="large" color={color.greenLight} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default LoadingIndicator
