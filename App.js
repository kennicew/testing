import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Cat = (props) => {
  const getFullName = (First, Second, Third) => {
    return First + " " + Second + " " + Third;
  }

  return(
    <View style={styles.container}>
      <Text>Hey bro, I am {props.name}!</Text>
      {/* <TextInput style={styles.input} defaultValue="Name me!" /> */}
    </View>
  )
}

const Cafe = () => {
  return(
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Cat name="Ann"/>
      <Cat name="Bob"/>
      <Cat name="Celina"/>
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


