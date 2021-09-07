import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

const Screen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Start A New Game!</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Select a Number</Text>
        <View style={styles.btnContainer}>
          <Pressable>
            <Text style={styles.btnText}>Reset</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.btnText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

  headerText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 15,
  },

  box: {
    backgroundColor: "white",
    alignItems: "center",
    width: "60%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderRadius: 10,
    paddingBottom: 13,
  },

  title: {
    paddingTop: 25,
  },

  boxText: {
    marginTop: 6,
    marginBottom: 18,
  },

  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },

  btnText: {
    color: "#0adcfc",
    fontSize: 16,
  },
});

export default Screen;
