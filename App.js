import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greetings from './Componets/Greetings';
import SearchBox from './Componets/SearchBox';
import Categories from './Componets/Categories';

export default function App() {
  return (
    <View style={styles.container}>
     <Greetings/>
     <SearchBox/>
      <Categories/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    
  },
});
