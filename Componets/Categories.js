import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Categories() {
  const data = [
    { id: 1, name: 'Exercise', photo: require('../assets/Exercise.jpeg'), tasks: 12 },
    { id: 2, name: 'Study', photo: require('../assets/woman.png'), tasks: 15 },
    { id: 3, name: 'Paint', photo: require('../assets/paint.jpeg'), tasks: 8 },
    { id: 4, name: 'Code', photo: require('../assets/code.webp'), tasks: 20 },
    { id: 5, name: 'Clean', photo: require('../assets/clean.jpeg'), tasks: 7 },
    { id: 6, name: 'Meditate', photo: require('../assets/meditate.jpeg'), tasks: 3 },
    { id: 7, name: 'Cook', photo: require('../assets/cook.jpeg'), tasks: 11 },
    { id: 8, name: 'Read', photo: require('../assets/study.png'), tasks: 9 },
  ];

  return (
    <View>
      <Text style={styles.head}>Categories</Text>

      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={item.photo} style={styles.categoryImage} />
            <View style={styles.textContainer}>
              <Text style={styles.categoryName}>{item.name}</Text>
              <Text style={styles.taskCount}>{item.tasks} Tasks </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    padding: 20,
    paddingTop: 25,
    fontSize: 20,
  },
  categoryItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 20,
  },
  categoryImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
    alignItems: 'left',
  },
  categoryName: {
    color: '#000',
    fontSize: 23,
    marginBottom:2,
  },
  taskCount: {
    color: '#000',
    fontSize: 14,
    fontStyle:'italic',
  },
});
