import { Text, View,StyleSheet,FlatList } from 'react-native'
import React, { Component } from 'react'

export class Tasks extends Component {
   
  render() {
    const tasks = [
            { id: 1, name: 'Exercise' },
            { id: 2, name: 'Study' },
            { id: 3, name: 'Paint'},
            { id: 4, name: 'Code' },
            { id: 5, name: 'Clean' },
            { id: 6, name: 'Meditate' },
            { id: 7, name: 'Cook' },
            { id: 8, name: 'Read' },
            { id: 9, name: 'Read Bible' },
            { id: 10, name: 'Web Development' },
            { id: 11, name: 'DataBase Analysis' },
            { id: 12, name: 'Automation' },
            { id: 13, name: 'Write scripts' },
            { id: 14, name: 'Stargaze' },
            { id: 15, name: 'Interact' },
    ]
    return (
        
      <View style={{flex:1}}>
        <Text style={styles.task}> Ongoing Tasks</Text>
        <FlatList
        data={tasks}
        
        renderItem={({ item }) => (
         
            <View  style={styles.container}>
              <Text style={styles.text} >{item.name}</Text>
            </View>
        
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    task:{
      fontSize:30,
      padding:20 
    },
    container:{
        backgroundColor:'#fff',
        margin:25,
        width:354,
        height:140,
        borderBlockColor:'#f2f',
        padding:50,
        borderRadius:20,
        borderColor:'#F0E2D3',
        borderWidth:1
    },
    text:{
        fontSize:24
    }
    
})
export default Tasks