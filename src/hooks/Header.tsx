import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'

interface Props {}

const Header: React.FC<Props> = props => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}> UPayment </Text>
            <Icon  />
        </View>
    )    
}
Header.defaultProps = {}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default Header
