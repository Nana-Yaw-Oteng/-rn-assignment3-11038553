import { Text, View ,TextInput,StyleSheet,Image} from 'react-native'
import React, { PureComponent } from 'react'

export class SearchBox extends PureComponent {
    render() {
      return (
        <View style={styles.searchContainer}>
          <Image source={require('../assets/Search icon.png')} style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
          <View>
        <Image source={require('../assets/Shuffle.png')} style={styles.toggle} />
        </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    searchContainer: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: '#fff',
      marginLeft:10,
      padding:10,
      borderRadius:30,
      width:318,
      height:38,
      alignContent:'center'
    },
    searchIcon: {
      marginLeft:2,
      top:0,
      
      
    },
    searchInput: {
       fontSize:20,
       top:0,
       left:10

      
    },

    toggle: {
        backgroundColor:'#F0522F',
        display:'flex',
        marginLeft:255,
        top:-7,
        borderRadius:10,
        height:35,
        width:38
    }
    
  });

export default SearchBox;