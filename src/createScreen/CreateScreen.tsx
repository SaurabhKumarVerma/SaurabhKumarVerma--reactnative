import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import axiosApi from '../api/Api';
import { color } from '../constant/color'
import CustomTextInput from '../hooks/CustomTextInput'

const Data = [
    {
        id: 1,
        Category_name: 'Accessories',
    },
    {
        id: 2,
        Category_name: 'Electrnics',
    },
    {
        id: 3,
        Category_name: 'Furnitures',
    },
    {
        id: 4,
        Category_name: 'WomensClothings',
    },
];

const CreateScreen = () => {
    const [selectedValue, setSelectedValue] = useState<string>();
    const [productTitle, setProductTitle] = useState<string>('');
    const [price, setPrice] = useState<number>();
    const [productDescription, setProductDescription] = useState<string>('');
    const [productImage, setProductImage] = useState<string>('');

    const onPressHandler = (items: { id?: number; Category_name: string; }) => {
        setSelectedValue(items.Category_name);
    }

    const handleTextInput = (text: React.SetStateAction<string>) => {
        setProductTitle(text)
    }

    const handlePriceTextInput = (text: React.SetStateAction<number>) => {
        setPrice(text)
    }

    const handleDescriptionTextInput = (text: React.SetStateAction<string>) => {
        setProductDescription(text)
    }

    const handleProductImageTextInput = (text: React.SetStateAction<string>) => {
        setProductImage(text)
    }

    const onSubmit = async () => {
        try {
            const response = await axiosApi.post('/products', {
                name: productTitle,
                price: price, category: selectedValue,
                description: productDescription, avatar: productImage,
                developerEmail: 'saurabh.mca.engg@gmail.com'
            })
            console.log(response.data, 'DATARESPONSE')
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView>
                <View >
                    {productTitle.length > 1 ? (<Text style={{ marginLeft: 10 }}>ProductTitle</Text>) : null}
                    <CustomTextInput
                        placeholder='Product Title'
                        style={styles.textStyle}
                        onChangeText={handleTextInput}
                        value={productTitle}
                    />
                    {price ? (<Text style={{ marginLeft: 10, paddingTop: 5 }}>Price</Text>) : null}
                    <CustomTextInput
                        placeholder='Price'
                        style={styles.textStyle}
                        onChangeText={handlePriceTextInput}
                        keyboardType="numeric"
                        value={price}
                    />
                    {productDescription.length > 1 ? (<Text style={{ marginLeft: 10, paddingTop: 5 }}>Description</Text>) : null}
                    <CustomTextInput
                        placeholder='Description'
                        style={styles.textArea}
                        multiline
                        numberOfLines={4}
                        onChangeText={handleDescriptionTextInput}
                        value={productDescription}
                    />
                    {productTitle.length > 1 ? (<Text style={{ marginLeft: 10, paddingTop: 5 }}>Image Link</Text>) : null}
                    <CustomTextInput
                        placeholder='Image Link'
                        style={styles.textStyle}
                        onChangeText={handleProductImageTextInput}
                        value={productImage}
                    />

                </View>
                <View style={styles.selectCategoryContainer}>
                    <Text style={styles.textSelectedcategory}> Selected Category: {selectedValue}</Text>
                </View>
                <View >
                    <FlatList
                        testID='FlatListId'
                        extraData={selectedValue}
                        horizontal={true}
                        data={Data}
                        keyExtractor={item => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => onPressHandler(item)}
                                style={selectedValue === item.Category_name ? styles.selectedCategoryList : styles.categoryList}
                            >

                                <Text style={selectedValue === item.Category_name ? styles.setSelectedColor : styles.defaultColor}>{item.Category_name}</Text>

                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{ alignSelf: 'center', paddingTop: '5%' }}>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={onSubmit}
                    >
                        <Text style={styles.setSelectedColor}>Add Product</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.greyLighter,
        flexDirection: 'column',
        flex: 1,
        paddingTop: 10
    },
    textStyle: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
        height: 35,
        marginTop: 10
    },
    textArea: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
    },
    selectCategoryContainer: {
        marginVertical: '5%',
        marginHorizontal: 15
    },
    textSelectedcategory: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    categoryList: {
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 10
    },
    selectedCategoryList: {
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: color.black
    },
    setSelectedColor: {
        color: color.white
    },
    defaultColor: {
        color: color.black
    },
    addButton: {
        backgroundColor: color.black,
        padding: 7,
        borderRadius: 5,
    }
})

export default CreateScreen
