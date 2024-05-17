import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../Images/Cell.jpg")} style={styles.image} />
      <Text style={styles.tituloHeader}>
        Apple iPhone 15 Pro Max 256GB Titânio Natural 6,7" 48MP iOS 5G
      </Text>
      <Text style={styles.paragrafoHeader}>Smartphone by Apple</Text>
      <Text style={styles.paragrafoHeaderSecond}>
        iPhone 15 Pro Max. Forjado em titânio e com o incomparável chip A17 Pro,
        botão de Ação configurável e o sistema de câmera mais poderoso em um
        iPhone.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicione ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
  tituloHeader: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginTop: 10,
  },
  paragrafoHeader: {
    color: "#57CE93",
    fontFamily: "Roboto",
    fontSize: 13,
    marginTop: 8,
  },
  paragrafoHeaderSecond: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#57CE93",
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
