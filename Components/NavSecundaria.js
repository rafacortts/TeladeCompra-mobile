import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NavSecundaria = () => {
  return (
    <View style={styles.NavSecundaria}>
      <View style={styles.nav2}>
        <Text style={[styles.titleSecond, styles.marginRight]}> Price for each ! </Text>
        <Text style={styles.titleSecond}> R$ 279,99 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NavSecundaria: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#57CE93",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  titleSecond: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  nav2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marginRight: {
    marginRight: 130,
  },
});

export default NavSecundaria;
