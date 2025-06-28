import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import Icon from "@expo/vector-icons/Ionicons";
import { Button } from "../components/buttons";

const ranger = 10;
const MIN_COUNT_LIMIT = 10;

export default function Counter() {
  const [count, setCount] = useState(MIN_COUNT_LIMIT);

  function onAddPressed() {
    setCount(count + ranger);
  }

  function onMinusPressed() {
    if (count - ranger < MIN_COUNT_LIMIT) return;
    setCount(count - ranger);
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{ marginHorizontal: 10 }}>
          <Button
            title={"+"}
            onPress={onAddPressed}
            btnIcon={<Icon size={40} name="heart" color={"purple"} />}
          />
        </View>
        <Text style={styles.counterText}>{count}</Text>
        <View style={{ marginHorizontal: 10 }}>
          <Button
            title={"-"}
            onPress={onMinusPressed}
            btnIcon={<Icon size={40} name="home" color={"red"} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    backgroundColor: "rgb(220, 40, 145)",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 30,
  },
});
