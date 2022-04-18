import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Cat = () => {
  const getFullName = (First, Second, Third) => {
    return First + " " + Second + " " + Third;
  }

  return(
    <View style={styles.container}>
      <Text>Hey there, I am {getFullName("Maru", "The", "Cat")}!</Text>
      {/* <TextInput style={styles.input} defaultValue="Name me!" /> */}
    </View>
  )
}

const Cafe = () => {
  return(
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Cat/>
      <Cat/>
      <Cat/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
    paddingTop: 20,
  },

  input:{
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
  }
})

export default Cafe;


