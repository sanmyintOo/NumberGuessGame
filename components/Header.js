import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => { 
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7287b",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 80,
  },

  title: {
    paddingTop: 25,
  },
});

export default Header;
