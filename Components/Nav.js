import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { AntDesign } from '@expo/vector-icons';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.iconContainer}>
      <Entypo name="menu" size={30} color="white" />
      </View>
      <Text style={styles.logo}>
        BOB
        <Text style={styles.blueText}>STUDIO</Text>
      </Text>
      <View style={styles.iconContainer}>
      <AntDesign name="search1" size={30} color="white" />
      </View>
      <View style={styles.iconContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    fontFamily : "Roboto"
  },
  blueText: {
    color: '#57CE93',
  },
  iconContainer: {
  alignItems:"center"
  },
});

export default NavBar;
