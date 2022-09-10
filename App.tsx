import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import CreateScreen from './src/createScreen/CreateScreen';
import TabNavigator from './src/navigations/Navigation';
import MyStack from './src/navigations/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import ProductTiles from './src/hooks/ProductTiles';
import All from './src/component/All/All';

const App = () => {
  return (
    // <ProductTiles/>
    // <All />
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
