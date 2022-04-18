import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>I am {props.name}, and I am {isHungry? "hungry":"full"}!</Text>
            <Button onPress={() => {setIsHungry(false);}} disabled={!isHungry} title={isHungry? "Pour me some milk, please!":"Thank you!"} />
        </View>
    );
}

const Cafe = () => {
  return(
    <View style={styles.container}>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 20,
  }
})

export default Cafe;



