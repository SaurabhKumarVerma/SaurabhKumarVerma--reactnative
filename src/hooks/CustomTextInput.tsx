import React from 'react'
import { TextInput, TextInputProps, SafeAreaView } from 'react-native'

const CustomTextInput = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<TextInput> & Readonly<TextInputProps>) => (
    <SafeAreaView style={{marginHorizontal: '3%'}}>
        <TextInput  
        {...props}
        testID='textInput'
        />
    </SafeAreaView>
)


export default CustomTextInput
