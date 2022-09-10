import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, View, ListRenderItem} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { CreateScreenNavigationProps, ProductTileTypes } from '../../../types';
import axiosApi from '../../api/Api';
import LoadingIndicator from '../../hooks/LoadingIndicator';
import { color } from '../../constant/color';
import ProductTiles from '../../hooks/ProductTiles';

type Props = {};

const WomensClothings: React.FC<Props> = () => {
  const [dataItem, setdata] = useState<any>();
  const navigation = useNavigation<CreateScreenNavigationProps>()
  
  const sortData = (data: any[]) => {
    const result = data.filter((item: any) => item.category == 'Clothing' );
    setdata(result)
  }

  const allProduct = async () => {
    await axiosApi.get('/products').then(res => sortData(res.data.products)).catch(error => console.log('Error Occur', error))
  }

  useEffect(() => {
  allProduct()
  }, [])

  const renderItem: ListRenderItem<ProductTileTypes> = ({ item }) => {
    return (
      <View >
        <ProductTiles
          productName={item.name}
          productImage={item.avatar}
          productPrice={item.price}
          productDescriptionText={item.description} />
      </View>
    )
  }
  
  return (
<SafeAreaView style={styles.container}>
    {dataItem === undefined ?
      (<View style={{ marginTop: '10%' }}><LoadingIndicator /></View>)
      : (<>
        <FlatList
          keyExtractor={(item: ProductTileTypes) => item.id}
          data={dataItem}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          numColumns={2} />

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('CreateScreen')}
        >
          <Icon name='plus' size={30} color='#01a699' />
        </TouchableOpacity>
      </>
      )}
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: color.white,
    borderRadius: 100,
  }
});


export default WomensClothings;
